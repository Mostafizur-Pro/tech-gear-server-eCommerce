import { IOrder } from './order.interface';
import { Order } from './order.model';
import { IPaginationOption } from '../../../shared/pagination';
import { IGenericResponse } from '../../../interfaces/common';
const createOrder = async (order: IOrder) => {
  const result = await Order.create(order);
  return result;
};

const getAllOrder = async (
  paginationOption: IPaginationOption,
): Promise<IGenericResponse<IOrder[]>> => {
  const { page = 1, limit = 10 } = paginationOption;
  const skip = (page - 1) * limit;
  const result = await Order.find()
    .sort({ created_at: 'desc' })
    .skip(skip)
    .limit(limit);
  const total = await Order.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getSingleOrder = async(id:string):Promise<IOrder | null>=>{
  const result = await Order.findById(id);
  return result
}
 
const updateOrder = async(id:string,payload:Partial<IOrder>)=>{
  const result = await Order.findByIdAndUpdate(
    {_id:id},
    {$set:{...payload}},
    {new:true}
  )
  return result
}
 const deleteOrder = async(id:string)=>{
  const result = await Order.findByIdAndDelete(id);
  return result
 }

export const orderService = {
  createOrder,
  getAllOrder,
  getSingleOrder,
  updateOrder,
  deleteOrder
};
