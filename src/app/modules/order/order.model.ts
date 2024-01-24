import {Schema,model}from'mongoose'
import {IOrder,orderModel}from'./order.interface'
const orderSchema = new Schema<IOrder>(
   
    {
      order_number:{
        type:String,
        required:[true,'please , give order number']
      } , 
      name: {
          type: String,
          required:[true,'Name is required']
        } ,
        email:{
            type:String,
            required:[true,'Email is required']
        },
        phone:{
            type:String,
            default:'123456767'
        },
        amount: {
            type: "String",
             required:true
          },
          needToPay:{
            type:String,
            required:true
          },
          dueForProducts:{
            type:String,required:true
          },
          address:{
            type:String,required:true
          },
          status:{
            type:String,required:true
          },
          transaction_id:{
            type:String,required:true
          },
          currency:{
            type:String,required:true
          },
          coupon_code:{
            type:String,
            required:true
          },
          coupon_victory:{
            type:String,
            required:true
          },
          user_id:{
            type:String,
            required:true
          },
          created_at:{
            type:String,
            required:true
          },
          updated_at:{
            type:String,
            required:true
          },
          deleted_at:{
            type:String,
            default:Date.now().toString()
          }
          
      },
      {
        timestamps: true,
      },
)

export const Order = model<IOrder, orderModel>('Order', orderSchema);