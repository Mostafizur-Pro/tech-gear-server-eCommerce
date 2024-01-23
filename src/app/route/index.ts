import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import {  blogRouter } from '../modules/blog/blog.router';
import {  productRouter } from '../modules/product/product.router';
import { orderRouter } from '../modules/order/order.router';
import { wishlistRouter } from '../modules/ wishlists/wishlists.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/blog',
    route: blogRouter,
  },
  {
    path: '/product',
    route: productRouter,
  } 
  ,
  {
    path: '/order',
    route: orderRouter,
  },
  {
    path: '/wishlist',
    route: wishlistRouter,
  } 
];

moduleRoutes.map(route => router.use(route.path, route.route));

export default router;
