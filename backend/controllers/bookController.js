const { EVBooking, CNGBooking, Payment } = require("../db/Booking");
const PetrolPump =require('../db/PetrolPump')
const { razorpay } = require("../config/razorpayConfig");
const crypto = require("crypto");
const {log} = require("console");
const evBooking = async (req, res) => {
  // console.log("reached");
  try {
    const { userId, pumpId, vehicleNo, timeSlot,bookedAt } = req.body;
    const evBooking = new EVBooking({ userId, pumpId, vehicleNo, timeSlot ,bookedAt});
    await evBooking.save();
    await PetrolPump.findByIdAndUpdate(pumpId, { $inc: { 'charger.queue': 1 } });
    res.status(201).send("EV Booking created successfully");
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
};
const cngBooking = async (req, res) => {
  try {
    const { userId, pumpId, vehicleNo, timeSlot } = req.body;
    const cngBooking = new CNGBooking({ userId, pumpId, vehicleNo, timeSlot });
    await cngBooking.save();
    await PetrolPump.findByIdAndUpdate(pumpId, { $inc: { 'cng.queue': 1 } });
    res.status(201).send("CNG Booking created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const evCount = async (req, res) => {
  try {
    const { timeSlot, pumpId } = req.query;

    // Query the database to count booked slots
    const count = await EVBooking.countDocuments({ timeSlot, pumpId });

    res.status(200).json({ count });
} catch (error) {
    console.error('Error fetching booked slots:', error);
    res.status(500).json({ error: 'Server error' });
}
};
const cngCount = async (req, res) => {
  try {
    const { timeSlot, pumpId } = req.query;

    // Query the database to count booked slots
    const count = await CNGBooking.countDocuments({ timeSlot, pumpId });

    res.status(200).json({ count });
} catch (error) {
    console.error('Error fetching booked slots:', error);
    res.status(500).json({ error: 'Server error' });
}
};
const createRazorpayOrder = async (req, res) => {
  const { userId } = req.body;
  if (!userId)
    return res
      .status(400)
      .json({ message: "Provide user id.", success: false });
  const options = {
    amount: 5 * 100,
    currency: "INR",
  };

  const { id, status } = await razorpay.orders.create(options);
  if (status !== "created")
    return res.status(400).json({ message: "Order is not created" });

  const orderData = {
    id,
    amount: 500,
    currency: "INR",
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
  };
  const createdOrder = new Payment({
    userId,
    paymentDate: Date.now(),
    totalAmount: 5,
    razorpayOrderId: id,
  });
  const result = await createdOrder.save();
  if (!result)
    return res
      .status(400)
      .json({ message: "Order is not saved", success: false });
  return res.status(200).json({ data: orderData, success: true });
};

const verifySignature = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generatedSignature = hmac.digest("hex");
  if (generatedSignature === razorpay_signature) {
    await Payment.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        paymentStatus: "Fully Paid",
        razorpaySignature: razorpay_signature,
        razorpayPaymentId: razorpay_payment_id,
      },
      { new: true }
    );
    return res.status(200).json({ success: true });
  }
  return res.status(400).json({ success: false });
};

const checkStatus = async (req, res) => {
  const { orderID } = req.body;
  if (!orderID)
    return res
      .status(400)
      .json({ message: "Provide order ID.", success: false });
  const order = await Payment.findOne({ razorpayOrderId: orderID });
  if (order.paymentStatus === "Fully Paid")
    return res.status(200).json({ message: "Order is paid", success: true });
  console.log(order);
  return res
    .status(400)
    .json({ message: "Order Payment is pending.", success: false });
};

module.exports = {
  evBooking,
  cngBooking,
  evCount,
  cngCount,
  createRazorpayOrder,
  verifySignature,
  checkStatus,
};
