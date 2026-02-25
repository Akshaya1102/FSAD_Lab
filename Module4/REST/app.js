import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import productRoutes from "./api/routes/products.js";
import orderRoutes from "./api/routes/orders.js";

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { url } from './db.config.js';
import authRoutes from "./api/routes/auth.js";

 //Connecting to the database
 mongoose.connect(url).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

//mongoose.Promise = global.Promise;


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));



//CORS headers


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
   next();   
});
//authentication 
app.use("/auth", authRoutes);
// Routes which should handle requests
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res, next) => {
  res.status(200).json({
  message: "hi"
});
});

const swaggerDocument = YAML.load('docs/products.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


export default app;
