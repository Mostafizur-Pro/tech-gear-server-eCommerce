import { IWishlists } from './wishlists.interface';
import { Wishlists} from './wishlists.model';
import { IPaginationOption } from '../../../shared/pagination';
import { IGenericResponse } from '../../../interfaces/common';
const creatWhiteList = async (order: IWishlists) => {
  const result = await Wishlists.create(order);
  return result;
};

const getAllwishlist = async(
  paginationOption:IPaginationOption,
):Promise<IGenericResponse <IWishlists []>> =>{
  const {page =1,limit=10} = paginationOption;
  const skip = (page-1)*limit
  const result = await Wishlists.find().sort({created_at: 'desc'}).skip(skip).limit(limit)
  const total = await Wishlists.countDocuments();
  return{
    meta:{
      page,
      limit,
      total
    },
    data:result
  }
}
 const getSingleWishlist = async(id:string):Promise<IWishlists |null>=>{
  const reslut = await Wishlists.findById(id)
  return reslut
 }
 
const updateWishlist = async(id:string,payload:Partial<IWishlists>)=>{
  const result = await Wishlists.findByIdAndUpdate(
    {_id:id},
    {$set:{...payload}},
    {new:true}
  )
  return result
}
 const deleteWishlist = async(id:string)=>{
  const result = await Wishlists.findByIdAndDelete(id);
  return result
 }

export const wishlistService = {
  creatWhiteList,
  getAllwishlist,
  getSingleWishlist,
  updateWishlist,
  deleteWishlist
};
