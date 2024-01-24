import {Schema,model}from'mongoose'
import {IWishlists,wishlistModel}from'./wishlists.interface'
const wishlistsSchema = new Schema<IWishlists>(
   
    {
    product_id:{type:String},
   
    item_id: {type:String},
    user_id: {type:String},
    created_at: {type:String},
    updated_at: {type:String},
    deleted_at: { type: String, enum: ['Yes', 'No'] },   
      },
      {
        timestamps: true,
      },
)

export const Wishlists = model<IWishlists, wishlistModel>('Wishlists', wishlistsSchema);