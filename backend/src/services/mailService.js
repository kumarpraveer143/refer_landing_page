import transporter from "../config/mailer.js";

const sendMail = async (to, referrerName) => {
  try {
    const htmlContent = `
    <div style="background-color: #f3f4f6; padding: 20px; text-align: center; font-family: Arial, sans-serif;">
        <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; max-width: 500px; margin: auto; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #1e3a8a; font-size: 24px; font-weight: bold; margin-bottom: 10px;">You've Been Referred!</h1>
            <p style="color: #4b5563; font-size: 16px;"><strong>${referrerName}</strong> has referred you to an exciting opportunity at <strong>Praveer Company</strong>.</p>
            <p style="color: #4b5563; font-size: 16px;">Join our team and take the next step in your career.</p>
            <a href="https://refer-landing-page-l63t.vercel.app/" style="display: inline-block; background-color: #3b82f6; color: #ffffff; padding: 10px 20px; border-radius: 5px; text-decoration: none; margin-top: 15px; font-weight: bold;">Apply Now</a>
            <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">If this wasn’t meant for you, feel free to ignore this email.</p>
        </div>
    </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: "Exciting Opportunity - You've Been Referred!",
      html: htmlContent,
    });

    console.log("Referral email sent!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendMail;
