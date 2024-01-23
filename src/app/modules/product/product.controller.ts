import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { IProduct } from './product.interface';
import { productService} from './product.service';
import { responseForData } from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import pick from '../../../shared/pick';
const createproduct = catchAsync(async (req: Request, res: Response) => {
  const productData = req.body;
  if (!productData) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'pleas try again');
  }

  const result = await productService.createProduct(productData);

  responseForData.sendResponseForCreate(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successful',
    data: result,
  });
});



// get all prouduct 
const getAllProduct = catchAsync(async(req:Request,res:Response)=>{
  const paginationOption = pick(req.query,[
    'limit',
    'page',
    'sortBy',
    'sortOrder'
  ])
  const result = await productService.getAllProduct(paginationOption)
  responseForData.sendResponse<IProduct[]>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message: 'Getting Suceessfull',
    data:result.data,
    meta:result.meta
  })
})
// // get single product
const getSingleProduct = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  if(!id){
    throw new ApiError(httpStatus.BAD_REQUEST,'Id is not found')
  }
  const result = await productService.getSingProduct(id)
 responseForData.sendResponseForCreate<IProduct>(res,{
  statusCode:httpStatus.OK,
  success:true,
  message:'Getting successful',
  data:result
 }) 
  
})
 // update product
const updateProduct = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const travelData = req.body;
  const result = await productService.updateProuduct(id,travelData);
  responseForData.sendResponseForCreate<IProduct>(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Product data update successfully',
    data:result
  })


})
//  delete product 
const deleteProduct = catchAsync(async(req:Request,res:Response)=>{
  const id = req.params.id;
  const result = await  productService.deleteProduct(id);
  responseForData.sendResponseForCreate(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'delete success',
    data:result
  })
})
 
export const productController = {
  createproduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
