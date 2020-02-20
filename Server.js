const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//!! DEFINE ROUTES here

app.use("/list", require("./routes/List"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Phone list server started on port ${PORT}`)
);
