const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./src/routes");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
