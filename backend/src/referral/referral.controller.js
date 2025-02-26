import { PrismaClient } from "@prisma/client";
import sendMail from "../services/mailService.js";
const prisma = new PrismaClient();

class ReferralController {
  async referDetail(req, res) {
    try {
      const { name, email, referredBy, message } = req.body;

      const existingReferral = await prisma.referral.findUnique({
        where: { email },
      });

      sendMail(email, referredBy);

      if (existingReferral) {
        return res.status(400).json({ error: "Email already referred!" });
      }

      const referral = await prisma.referral.create({
        data: { name, email, referredBy, message },
      });

      res
        .status(201)
        .json({ message: "Referral submitted successfully", referral });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong!" });
    }
  }
}

export default ReferralController;
