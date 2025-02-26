import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/referral/referral.route.js";

app.use(
  cors({
    origin: "https://refer-landing-page-l63t.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

dotenv.config();

const app = express();
app.use(json());

const port = process.env.PORT;

app.use("/users/refer", router);

app.listen(port, () => {
  console.log("Server is up at the port ", port);
});
