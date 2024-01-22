import express from'express'
import {productController} from './product.controller'
const router = express.Router()

//prouduct CRUD Operation
router.post('/createProduct',productController.createproduct)
router.get('/',productController.getAllProduct)
router.get('/:id',productController.getSingleProduct)
router.patch('/:id', productController.updateProduct)
router.delete('/:id',productController.deleteProduct)
 

export const productRouter = router