import express from'express'
import { orderController } from './order.controller'
const router = express.Router()
 
router.post('/createOrder', orderController.createOrder)
router.get('/',orderController.getAllOrder)
router.get('/:id',orderController.getSingleOrder)
router.patch('/:id',orderController.updateOrder)
router.delete('/:id',orderController.deleteOrder)
 


export const orderRouter = router