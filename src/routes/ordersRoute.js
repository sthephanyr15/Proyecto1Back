import { Router } from 'express';
import {createDelivery,getOrderId,getOrderUser,getSentOrders,updateOrder,deleteOrder} from '../controllers/ordersController.js';

const router = Router();
router.post('/', createDelivery);
router.get('/:id', getOrderId);
router.get('/:user', getOrderUser);
router.get('/:sent', getSentOrders);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
