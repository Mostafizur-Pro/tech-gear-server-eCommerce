import {Schema,model}from'mongoose'
import {IProduct,ProductModel}from'./product.interface'
const ProductSchema = new Schema<IProduct>(
   
    {
        
        title:{
            type:String,
            required:true
        },
        price:{
          newPrice:{type:String,required:true},
          oldPrice:{type:String,required:true}
        },
        stockStatus:{
          type:String,
          default:'In Stock'
        },
        content:{type:String,required:[true,'you forget give this value']},
        description:{
            type:String,
        },
        size:{
          type:Map, of:String
        },
        color:{
          type:Map,of:String
        },
        information:[
          {
            id:{type:String},
            name:{type:String},
            quality:{type:String},
            color:{type:String}
          }
        ],
        image:{
          type:Map,of:String
        },
        tags:{
          type:Map,of:String
        },       
      },
      {
        timestamps: true,
      },
)

export const Product = model<IProduct, ProductModel>('Product', ProductSchema);