module.exports = function (server) {
  const customers = require("../controller/customer.controller.js");

  // Create a new Customer
  server.post("/api/customers", function (req, res) {
    customers.create();
  });
  // Retrieve all Customer
  server.get("/api/customers", function (req, res) {
    customers.findAll;
  });

  // Retrieve a single Customer by Id
  server.get("/api/customers/:customerId", customers.findById);

  // Update a Customer with Id
  server.put("/api/customers/:customerId", customers.update);

  // Delete a Customer with Id
  server.delete("/api/customers/:customerId", customers.delete);
};
