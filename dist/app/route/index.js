"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const blog_router_1 = require("../modules/blog/blog.router");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.userRouter,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoute,
    },
    {
        path: '/blog',
        route: blog_router_1.blogRouter,
    },
];
moduleRoutes.map(route => router.use(route.path, route.route));
exports.default = router;
