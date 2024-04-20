const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Rayaanracer:Gt101200@cluster0.d6yiowa.mongodb.net/doctorapp"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error(err);
  });
