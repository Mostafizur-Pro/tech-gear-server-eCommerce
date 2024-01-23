import { Model } from 'mongoose';
interface User {
 
}

export type IWishlists = {
 
 
  product_id:string,
  item_id:string,
  user_id:string,
  created_at:string,
  updated_at:string,
  deleted_at: 'Yes' | 'No';
};

export type wishlistModel = Model<IWishlists, Record<string, unknown>>;