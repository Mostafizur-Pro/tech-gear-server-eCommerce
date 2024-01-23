import express from'express'
import { wishlistController } from './ wishlists.controller'
const router = express.Router()
 
router.post('/createWishlist', wishlistController.createWishlist)
router.get('/', wishlistController.getAllwishlist)
router.get('/:id', wishlistController.getSingleWishlist)
router.patch('/:id', wishlistController.updateWishlist)
router.delete('/:id', wishlistController.deleteWishlist)



export const wishlistRouter = router