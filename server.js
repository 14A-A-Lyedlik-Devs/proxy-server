require("dotenv").config();
const express = require("express");
let fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/access_token", async (req, res) => {
  const authUrl = `https://github.com/login/oauth/access_token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}`;

  const response = await fetch(authUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.text();

  res.send(data);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
