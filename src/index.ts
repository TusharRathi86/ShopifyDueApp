require("dotenv").config()
import express from "express";
import { router as productRouter } from "./routes/products.routes";
const app = express(); 
// PORT number
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/shopify", productRouter);

// Listening on the port  
app.listen(PORT, () => console.log(`Application listening on port ${PORT}`));
