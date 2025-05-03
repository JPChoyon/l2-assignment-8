"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = require("express");
const customer_controller_1 = require("./customer.controller");
const router = (0, express_1.Router)();
// create a new customer
router.post("/", customer_controller_1.customerController.createCustomer);
// get all customers
router.get("/", customer_controller_1.customerController.getAllCustomers);
// get a customer by id
router.get("/:id", customer_controller_1.customerController.getCustomerById);
// update a customer by id
router.put("/:id", customer_controller_1.customerController.updateCustomer);
// delete a customer by id
router.delete("/:id", customer_controller_1.customerController.deleteCustomer);
exports.customerRoutes = router;
