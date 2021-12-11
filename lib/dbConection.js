const mongoose = require("mongoose");
const URI = process.env.URI;
const dbConnection = async () => {
  if (!URI)
    return console.log(
      "[DB Connection] URI is undefined please set it on .env.local file"
    );
  await mongoose
    .connect(URI)
    .then((mongoose) => {
      console.log("[DB] Conected");
    })
    .catch((err) => {
      console.error("[DB ERROR]" + err);
    });
};

module.exports = dbConnection;
