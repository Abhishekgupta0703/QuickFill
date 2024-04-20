const { Payment } = require("../db/Payments");
const { Razorpay } = require("razorpay");
const crypto = require("crypto");
require('dotenv').config();
var instance = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET"
});
const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR"
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order
  });
};
const paymentVerification = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  } = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const hash = crypto
    .createHmac("sha256", "YOUR_KEY_SECRET")
    .update(body.toString().digest("hex"));
  const isauth = hash === razorpay_signature;
  if (isauth) {
    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    });
    res.status(200).json({
      success: true
    });
  } else {
      res.status(400).json({
        success: false
      });
  }
};
const getKey = (req, res) => {
    return res.status(200).json({
        key: "YOUR_KEY_ID"
    })
}