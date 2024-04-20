const {mongoose} = require('mongoose');
const paymentSchema = new mongoose.Schema({
    razorpay_order_id: {
        type: String,
        required: true
    },
    razorpay_payment_id: {
        type: String,
        required: true
    },
    razorpay_signature: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model("Payment", paymentSchema);
// export default payment;  
/* 
userID is the person who made this payment
amount is how much money was paid
status is whether it's been paid or not */