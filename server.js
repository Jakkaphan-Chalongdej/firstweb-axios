const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();
const db = require("./components/config/db.config.js");
//force: true will drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync with { force: true }");
// });
db.sequelize.sync();
app.prepare().then(() => {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  require("./components/route/customer.route.js")(server);
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(3001, (err) => {
    if (err) throw err;
    console.log("   > Ready on listen >> Port : 3001 <    ");
    console.log("-----------------------------------------");
    console.log(" PLEASE VISIT >> http://localhost:3001 <<");
    console.log("_________________________________________");
  });
});
// .catch((ex) => {
//   console.error(ex.stack);
//   process.exit(1);
// });
