import express from 'express'
import authMiddleware from '../middleware/auth.js'
import {listOrders, placeOrder, updateOrderStatus, userOrders, verifyOrder} from "../controlers/orderControler.js"

const orderRouter = express.Router();
orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware, userOrders)
orderRouter.get('/list', listOrders)
orderRouter.post('/status',updateOrderStatus)

export default orderRouter;