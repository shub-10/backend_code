
import {connectDB} from './db/database.js';
import dotenv from 'dotenv';


dotenv.config({path:'./env'});
connectDB();

// const app = express();
// ;(async ()=>{
//     try {
//       await mongoose.connect(`${process.env.Mongo_uri}/${db_name}`)
//       app.on("error" , (error)=>{
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log( ` app listening on ${process.env.PORT}`);
//       })
//     } catch (error) {
//       console.log("error");
//       throw error
//     }
// })