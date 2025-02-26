import express, { json } from "express";
import dotenv from "dotenv";
import router from "./src/referral/referral.route.js";

dotenv.config();

const app = express();
app.use(json());

const port = process.env.PORT;

app.use("/users/refer", router);

app.listen(port, () => {
  console.log("Server is up at the port ", port);
});
