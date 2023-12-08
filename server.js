const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001; // Choose a port number

app.use(cors());
app.use(bodyParser.json());

app.post("/initiate-payment", async (req, res) => {
  try {
    // youll get this from the frontend
    const finalXHeader = req.headers["x-verify"];
    const requestPayload = req.body.request;
// the url of the payment gateway
    const apiUrl = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
    const headers = {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": finalXHeader,
    };

    const response = await axios.post(
      apiUrl,
      { request: requestPayload },
      { headers }
    );

    if (
      response.data &&
      response.data.success &&
      response.data.success === true
    ) {
      console.log("Payment initiated successfully.");

      // Extract the redirectUrl from the PhonePe response
      const redirectUrl =
        response.data.data.instrumentResponse.redirectInfo.url;

      // Respond with success and redirectUrl to the phonepay gateway
      res.status(200).json({ success: true, redirectUrl });
    } else {
      console.error("Payment failed. PhonePe API response:", response.data);
      res.status(500).json({ error: "Payment failed" });
    }
  } catch (error) {
    console.error("Error initiating payment:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
