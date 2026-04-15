import app from "./app.js";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4000;

connectDb()
  .then(
    app.listen(port, () => {
      console.log(`server is running fine on ${port}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
