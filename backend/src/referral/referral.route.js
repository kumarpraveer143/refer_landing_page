import express from "express";
import ReferralController from "./referral.controller.js";

const router = express.Router();

//post user data route
const referralController = new ReferralController();

router.post("/refer", (req, res) => {
  referralController.referDetail(req, res);
});

export default router;
