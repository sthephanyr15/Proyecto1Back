import Restaurant from '../schemas/restaurantsSchema.js';
import mongoose from 'mongoose';    

export const createRestaurant = async (req, res) => {
    const {name, address, phone, products}= req.body;
    try{
        const restaurant= new Restaurant({ idAdmin: req.userID ,name, address, phone, products, idAdmin: req.userID});
        await restaurant.save();
        return res.status(201).json({message: "Restaurant created successfully"});
    }catch{
        res.status(500).json({message: error.message});
    }
};

export const getRestaurant = async (req, res) => { 
    try{
        const{restaurantID} = req.query;
        const query={isDeleted:false};
        if(restaurantID) query.restaurantID= restaurantID;
        const restaurant= Restaurant.find(query); 
        res.status(200).json(restaurant);
    }catch(error){
        res.status(500).json({message: error.message});
    }   
};      

export const getAllRestaurants = async (req, res) => {
    try{
        const restaurant=await Restaurant.find({isDeleted: false});
        res.status(200).json(restaurant);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const updateRestaurant = async (req, res) => {
    const {restaurantID}= req.params;
    const { name, address, phone, products}= req.body;
    try{
        Restaurant.findByIdAndUpdate({restaurantID: restaurantID});
        if(!Restaurant){
            return res.status(404).json({message: "Restaurant not found"});
        }else{
            Restaurant.name= name;
            Restaurant.address= address;
            Restaurant.phone= phone;
            Restaurant.products= products;
            await Restaurant.save();
            return res.status(200).json({message: "Restaurant updated successfully"});
        }
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteRestaurant = async (req, res) => {
    const {restaurantID}= req.params;
    try{
        restaurant.findByIdAndUpdate({restaurantID: restaurantID});
        if(!Restaurant){
            return res.status(404).json({message: "Restaurant not found"});
        }else{
            Restaurant.isDeleted= true;
            await Restaurant.save();
            return res.status(200).json({message: "Restaurant deleted successfully"});
        }
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

// export {createRestaurant, getRestaurant, getAllRestaurants, updateRestaurant, deleteRestaurant};

