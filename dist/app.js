"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const route_1 = __importDefault(require("./app/route"));
app.use((0, cors_1.default)());
//parser
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// use global error handler
app.use(globalErrorHandler_1.default);
// global route
app.use('/api/v1', route_1.default);
// if not found any route or api
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Route not found',
        errorMessage: [
            {
                path: '.',
                message: 'Api Is not found',
            },
        ],
    });
    next();
});
exports.default = app;
