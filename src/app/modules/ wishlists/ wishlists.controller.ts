import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { IWishlists } from './wishlists.interface';
import { wishlistService } from './wishlists.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import pick from '../../../shared/pick';

const createWishlist = catchAsync(async(req:Request,res:Response)=>{
  const wishlisData = req.body;
  if(!wishlisData){
    throw new ApiError(httpStatus.BAD_REQUEST,'please try again')
  } 
  const result = await wishlistService.creatWhiteList(wishlisData);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'wishlisht create successful',
    data:result
  })
  
})
 
 const getAllwishlist = catchAsync(async(req:Request,res:Response)=>{
  const paginationOption = pick(req.query,[
    'limit',
    'page',
    'sortBy',
    'sortOrder'
  ])
  const result = await wishlistService.getAllwishlist(paginationOption);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'getting all data',
    data:result
  })
 })
 const getSingleWishlist = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  if(!id){
    throw new ApiError(httpStatus.BAD_REQUEST,'Is not found')
  }
  const result = await wishlistService.getSingleWishlist(id);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'successful',
    data:result
  })

 })


 
const updateWishlist = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const travelData = req.body;

  const result = await wishlistService.updateWishlist(id,travelData);
  responseForData.sendResponseForCreate<IWishlists>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'successful',
    data:result
  })
})
 const deleteWishlist =catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const result = await wishlistService.deleteWishlist(id);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Delete succefull',
    data:result
  })
 })
 
export const wishlistController = {
  createWishlist,getAllwishlist,getSingleWishlist,updateWishlist,deleteWishlist
};
