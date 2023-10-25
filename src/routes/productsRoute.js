import {Router} from 'express';
import {createProduct, getProductbyId, getProductbyRestaurantID, getAllProducts, updateProduct, deleteProduct} from '../controllers/productsController';

const router = Router();
router.post('/', createProduct);
router.get('/_id', getProductbyId);
router.get('/', getProductbyRestaurantID);
router.get('/products', getAllProducts);
router.patch('/:_id', updateProduct);
router.delete('/:_id', deleteProduct);

export default router;