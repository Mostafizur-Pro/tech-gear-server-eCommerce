import { IProduct } from "./product.interface";
import {Product} from'./product.model'
import { IPaginationOption } from '../../../shared/pagination';
import { IGenericResponse } from '../../../interfaces/common';
const createProduct = async(product:IProduct)=>{
  const result = await Product.create(product)
  return result;
}
// // get all user
// const getAllBlog = async (
//     paginationOption: IPaginationOption,
//   ): Promise<IGenericResponse<IUser[]>> => {
//     // this is for pagination
  
//     const { page = 1, limit = 10 } = paginationOption;
//     const skip = (page - 1) * limit;
  
//     const result = await Blog.find()
//       .sort({
//         createdAt: 'desc',
//       })
//       .skip(skip)
//       .limit(limit);
//     const total = await Blog.countDocuments();
//     return {
//       meta: {
//         page,
//         limit,
//         total,
//       },
//       data: result,
//     };
//   };

const getAllProduct = async(
  paginationOption: IPaginationOption,
): Promise<IGenericResponse <IProduct[]>> =>{
  // this is for pagination
  const {page=1,limit=10} = paginationOption;
  const skip = (page-1)*limit;
  const result = await Product.find().sort({createdAd:'desc'}).skip(skip).limit(limit);
  const total = await Product.countDocuments();
  return{
    meta:{
      page,
      limit,
      total
    },
    data:result
  }
}

// // get single product

const getSingProduct = async(id:string):Promise<IProduct |null>=>{
  const result = await Product.findById(id);
  return result;
}
 
 
const updateProuduct = async(id:string,payload:Partial<IProduct>)=>{
  const result = await Product.findByIdAndUpdate(
    {_id:id},
    {$set:{...payload}},
    {new:true}
  )
 return result
}
const deleteProduct = async(id:string)=>{
  const result = await Product.findByIdAndDelete({
   _id:id
  })
  return result;
}
export const productService = {
   createProduct,
   getAllProduct,
   getSingProduct,
   updateProuduct,
   deleteProduct
 
}