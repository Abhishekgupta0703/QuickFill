const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/QuickFill").then(() => {
    console.log("MongoDB Connected");
}).catch((err) => {
    console.error(err);
})
