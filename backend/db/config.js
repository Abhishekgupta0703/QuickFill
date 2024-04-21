const mongoose = require("mongoose");
mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error(err);
  });
