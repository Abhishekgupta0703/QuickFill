//pumpRoutes.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  evBooking,
  cngBooking,
  createRazorpayOrder,
  verifySignature,
  checkStatus,
  evCount,
  cngCount,
} = require("../controllers/bookController");

// Middleware for CORS configuration
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // Update this with the actual origin of your frontend
  })
);
router.post("/Booking/EV", evBooking);
router.get('/Booking/EV/count',evCount)
router.post("/Booking/CNG", cngBooking);
router.get("/Booking/CNG/count", cngCount);
router.post("/create-order", createRazorpayOrder);
router.post("/verify-order", verifySignature);
router.post("/check-status", checkStatus);
module.exports = router;
