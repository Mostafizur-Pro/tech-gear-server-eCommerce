import {Schema,model}from'mongoose'
import {IUser,BlogModel}from'./blog.interface'
const blogSchema = new Schema<IUser>(
   
    {
        name: {
          type: String,
        } ,
        title:{
            type:String
        },
        description:{
            type:String,
        },
        image: {
            type: [String], // Specify the type of elements in the array as String
          },
          comments:[
            {
              type:String,
              created:{type:Date,default:Date.now},
              postedBy:{type: Schema.Types.ObjectId,ref:'User'}
            }
          ],
          postedBy: {
            type: Schema.Types.ObjectId,
            ref: 'User', // Reference to the UserModel
          },
          created:{
            type:Date,
            default:Date.now()
          },
          likes:[{type:Schema.Types.ObjectId,ref:'User'}]
          
      },
      {
        timestamps: true,
      },
)

export const Blog = model<IUser, BlogModel>('Blog', blogSchema);