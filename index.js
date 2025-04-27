const express = require("express");
const app = express();
const { engine } = require("express-handlebars"); // <-- notice the { engine }
const path = require("path");

const port = process.env.PORT || 5000;

// Set handlebars middleware
app.engine("handlebars", engine()); // <-- use engine()
app.set("view engine", "handlebars");
app.set("views", "./views");

// Set handlebars routes
app.get("/", function (req, res) {
  res.render("home", {
    stuff: "This is some stuff",
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
