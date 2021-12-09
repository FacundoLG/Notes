const mongoose = require("mongoose");
const { URI } = require("./localVariables");
//Connection
mongoose
  .connect(URI)
  .then(() => {
    console.log("[DB] Conected");
  })
  .catch((err) => {
    console.error("[DB ERROR]" + err);
  });
