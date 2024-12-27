import mongoose from 'mongoose';

import {db_name} from '../constant.js';
export const connectDB = async () =>{
  try {
    const connectionInstance = await mongoose.connect( `${process.env.Mongo_uri}/${db_name}`);
    console.log(` MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

  } catch (error) {
     process.exit(1);
  }
}
