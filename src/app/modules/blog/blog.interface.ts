import { Model } from 'mongoose';

export type IUser = {
  name: string;
  title: string;
  description: string;
  image: string[];
  comments:string[];
  postedBy:object,
  created:Date,
  likes:string[]
  
};

export type BlogModel = Model<IUser, Record<string, unknown>>;