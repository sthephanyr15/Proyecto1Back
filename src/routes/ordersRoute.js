import { Router } from 'express';
import {
  createProduct,
  getProductbyId,
  getProductbyRestaurantID,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../controllers/productsController.js';

const router = Router();
router.post('/', createProduct);
router.get('/_id', getProductbyId);
router.get('/', getProductbyRestaurantID);
router.get('/products', getAllProducts);
router.patch('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);

export default router; // Export the router using ES module syntax
