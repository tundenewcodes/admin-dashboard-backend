import express from 'express'
import {connectDB} from './config/dbConnect.js'
const app = express()
import bodyParser from "body-parser"
const PORT = process.env.PORT || 3500
//import authRoutes from './routes/authRoutes.js'
import clientRoutes from "./routes/clientRoute.js";
import generalRoutes from "./routes/generalRoute.js";
import managementRoutes from "./routes/managementRoute.js";
import sales from "./routes/sales.js";
// import salesRoutes from "./routes/salesRoute.js";
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import dotenv from "dotenv";
//import {notFound, errorHandler} from './middleware/errorHandler'
// data imports
import cors from "cors";

import {dataUser,  dataProduct,
    dataProductStat,
    dataTransaction,
    dataOverallStat,
    dataAffiliateStat} from './data/index.js'




import User from "./models/User.js";
import Product from "./models/Product.js";
 import ProductStat from "./models/ProductStat.js";
 import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from './models/AffiliateStat.js'
// configuration
dotenv.config();
app.use(express.json());
app.use(express.urlencoded())
app.use(cookieParser())
app.use(morgan('common'))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false}))
app.use(cors());
/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
 app.use("/sales", sales);

// import AffiliateStat from "./models/AffiliateStat.js";






app.use('/', (req, res)=>{
res.send('welcome & hello from server side')
})

const start = async() => {
    try {
      await connectDB('mongodb+srv://fadipe11:tunde2022@cluster0.u5ms2my.mongodb.net/test')

        app.listen(
            PORT,
            console.log(`server is running on PORT : ${PORT}`)
        )
    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
     //Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);

    } catch (err) {
        console.log(err)
    }
}
start()