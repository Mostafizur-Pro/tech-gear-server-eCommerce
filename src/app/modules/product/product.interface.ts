import { Model } from 'mongoose';
interface User {
  _id: string;
  username: string;
  // other user properties
}

export type IProduct = {
  title: string;
  price: {
    newPrice: number;
    oldPrice: number;
  }
  stockStatus:string;
  content:string;
  description: string;
  size: Record<string, string>;
  color: Record<string, string>
  information: {
    id: string;
    name: string;
    quality:string;
    color:string
  }[];
  image: {
    img1:string;
    img2:string;
    img3:string;
    img4:string;
    img5:string
  };
 tags:{
  tag1:string;
  tag2:string;
  tag3:string;
  tag4:string;
  tag:string;
 };
 postedBy:User['_id']
  
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;