import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { IOrder } from './order.interface';
import { orderService } from './order.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import pick from '../../../shared/pick';
const createOrder = catchAsync(async(req:Request,res:Response)=>{
  const orderData = req.body;
  if(!orderData){
    throw new ApiError(httpStatus.BAD_REQUEST,'please try again')
  }
  const result = await orderService.createOrder(orderData)
  responseForData.sendResponseForCreate(res,{
    statusCode: httpStatus.OK,
    success:true,
    message:"order create succefully",
    data:result
  })
  
})
 
 const getAllOrder = catchAsync(async(req:Request,res:Response)=>{
    const paginationOption = pick(req.query,[
        'limit',
        'page',
        'sortBy',
        'sortOrder'
    ])
    const result = await orderService.getAllOrder(paginationOption);
    responseForData.sendResponseForCreate(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:"getting all information",
      data:result
    })
 })
 


const getSingleOrder = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  if(!id){
    throw new ApiError(httpStatus.BAD_REQUEST,'id is not found');
  }
  const result = await orderService.getSingleOrder(id);
  responseForData.sendResponseForCreate<IOrder>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Getting successfully',
    data:result
  })
  
})
const updateOrder = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const travelData = req.body;

  const result = await orderService.updateOrder(id,travelData);
  responseForData.sendResponseForCreate<IOrder>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'successful',
    data:result
  })
})
 const deleteOrder =catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const result = await orderService.deleteOrder(id);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Delete succefull',
    data:result
  })
 })
 
export const orderController = {
    createOrder,
    getAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder
};
