const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const bodyParser = require("body-parser");
const db = require('../db')
//const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3000;

const app = express();

// logging middleware
app.use(volleyball);


// body parsing middleware
app.use(bodyParser.json());
// app.get();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./api"));

app.use(express.static(path.join(__dirname, "..", "client/src/public")));

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "client/src/public/index.html"));
});


db.sync({ force: true }) // uncomment force true to clear database with each sync
.then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on Port: ", PORT);
  })
})
.catch(err => console.error(err));

app.use("/", (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server error.");
});