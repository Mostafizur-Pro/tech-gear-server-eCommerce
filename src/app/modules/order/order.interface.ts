import { Model } from 'mongoose';
interface User {
  _id: string;
  username: string;
  // other user properties
}

export type IOrder = {
   order_number:string;
  name:string
  email:string;
  phone:string;
  amount: string;
  needToPay: string;
  dueForProducts: string;
  address:string;
  status:string;
 transaction_id:string;
  currency:string;
  coupon_code:string;
  coupon_victory:string;
  user_id:string;
  created_at:string;
  updated_at:string;
  deleted_at:string;
};

export type orderModel = Model<IOrder, Record<string, unknown>>;