require('dotenv').config();

const express = require("express");
const User = require("./model/UserModel");
const mongoose = require('mongoose');
const cors = require("cors");

const bodyParser = require("body-parser");




const { HoldingModel } = require('./model/HoldingModel');
const { OrderModel } = require('./model/OrderModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
 

const app = express();


app.use(cors({
  origin: [
    "https://zerodha-clone-five-omega.vercel.app",
    "https://zerodha-dashboard-black.vercel.app"
  ],
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());




app.get("/allHoldings", async (req, res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings)
});

app.post("/newOrder", async (req, res)=>{
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });


       newOrder.save(); 
    res.setDefaultEncoding("order added");
});

app.post("/signup", async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      message: "Signup Successful",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
});

app.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
});
app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("DB started");
    
});