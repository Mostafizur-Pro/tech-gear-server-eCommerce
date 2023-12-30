import { Model } from 'mongoose';

export type IUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  address: string;
  role: 'admin' | 'buyer' | 'seller';
};

export type UserModel = Model<IUser, Record<string, unknown>>;
