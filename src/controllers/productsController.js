import Product from '../schemas/productSchema.js';
import Restaurant from '../schemas/restaurantSchema.js';
import mongoose from 'mongoose';

export const createProduct = async (req, res) => {
  try {
    const {
      restaurantID,
      name,
      description,
      category,
      availableQuantity,
      price,
    } = req.body;
    if (!mongoose.Types.ObjectId.isValid(restaurantID)) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    const productStatus = availableQuantity > 0 ? 'available' : 'unavailable';

    if (productStatus === null) {
      return res.status(404).json({ message: 'Product status not found' });
    }
    const product = new Product({
      restaurantID: restaurantID,
      name: name,
      description: description,
      category: category,
      availableQuantity: availableQuantity,
      price: price,
      status: productStatus,
    });
    await product.save();
    if (restaurantID) {
      const updateRestaurant = await Restaurant.findByIdAndUpdate(
        { _id: restaurantID, isDeleted: false },
        { $push: { products: product.name } },
        { new: true }
      );
      if (!updateRestaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
    }
    res.status(200).json({ message: 'Product created successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getAllProducts = async (req, res) => {
  const { restaurantID } = req.query;
  const query = { isDeleted: false };
  if (restaurantID) query.restaurantID = restaurantID;
  try {
    const products = await Product.find(query);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(200).json(Product);
};
export const getProductById = async (req, res) => {
  const { productID } = req.params;
  try {
    const product = await Product.findById(productID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.status(200).json(Product);
};

export const updateProduct = async (req, res) => {
  const { productID } = req.params;
  const { name, description, category, availableQuantity, price, status } =
    req.body;
  const productStatus = availableQuantity > 0 ? 'available' : 'unavailable';
  if (productStatus === null) {
    return res.status(404).json({ message: 'Product status not found' });
  }
  try {
    Product.findByIdAndUpdate(
      { productID: productID, isDeleted: false },
      {
        $set: {
          name: name,
          description: description,
          category: category,
          availableQuantity: availableQuantity,
          price: price,
          status: productStatus,
        },
      },
      { new: true }
    );
    if (!updateProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (name) {
      const updateRestaurant = await Restaurant.findByIdAndUpdate(
        {
          restaurantID: updateProduct.restaurantID,
          isDeleted: false,
          products: { $regex: updateProduct.name, $options: 'i' },
        },
        { $set: { 'products.$': name } },
        { new: true }
      );
      if (!updateRestaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
    }
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};

export const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    Product.findByIdAndUpdate({ productID: productID, isDeleted: true });
    if (!Product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (Product.restaurantID) {
      const updateRestaurant = await Restaurant.findByIdAndUpdate(
        { restaurantID: Product.restaurantID, isDeleted: false },
        { $pull: { products: Product.name } },
        { new: true }
      );
      if (!updateRestaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
