import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" }); 

import app from "./app.js";

const PORT = process.env.PORT || 5000;

console.log("PORT:", PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
