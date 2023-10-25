import {Router} from 'express';
import {createOrder, getOrderbyId, getOrderbyFilter,getAllProducts, getNotAccepted, updateOrder, deleteOrder} from '../controllers/ordersController';

const router = Router();
router.post('/', createOrder);
router.get('/_id', getOrderbyId);
router.get('/products', getAllProducts);
router.get('/orders', getOrderbyFilter);
router.get('/notAccepted', getNotAccepted);
router.patch('/:_id', updateOrder);
router.delete('/:_id', deleteOrder);

export default router;