// callback-server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3002; // Choose a different port number than your existing server

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle POST requests to /payment-success
app.post("/payment-success", (req, res) => {
  try {
    // Extract relevant information from the request body
    const code = req.body.code;
    const merchantId = req.body.merchantId;
    const transactionId = req.body.transactionId;
    const amount = req.body.amount;
    const body = req.body;

    // Handle the payment success data as needed
    // console.log("Payment success data full:", req.body); // whole payment data is available
    console.log("Payment success data:", {
      code,
      merchantId,
      transactionId,
      amount,
    });// selected transaction data is available
    if (body) {
      // Send a response with redirect URL to the payment success page

      // orginal way to get data const redirectUrl = `http://localhost:4200/payment-success?code=${code}&merchantId=${merchantId}&transactionId=${transactionId}&amount=${amount}`;

      // custom data for payment details on the success page
      const redirectUrl = `http://localhost:4200/payment-success?transactionId=${transactionId}`;

      res.redirect(redirectUrl);
      // res.status(200).json({ success: true, message: "Payment success data received", redirectUrl });
    } else {
      // Log to console or handle the case where yourVariable is falsy
      console.error("Condition not met. Not redirecting.");
      res.status(200).json({ success: false, message: "Condition not met. Not redirecting.", body: req.body });
    }
  } catch (error) {
    console.error("Error handling payment success:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Callback Server is running on port ${port}`);
});
