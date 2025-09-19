const express = require("express");
const path = require("path");

const app = express();

// serve public folder
app.use(express.static(path.join(__dirname, "public")));

// always send index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// test route
app.get("/test", (req, res) => {
  res.send("✅ Server is working!");
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5001"));