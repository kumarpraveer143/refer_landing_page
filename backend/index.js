import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/referral/referral.route.js";

const app = express();
app.use(
  cors({
    origin: "https://refer-landing-page.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

dotenv.config();

app.use(json());

const port = process.env.PORT;

app.use("/users", router);

app.listen(port, () => {
  console.log("Server is up at the port ", port);
});
