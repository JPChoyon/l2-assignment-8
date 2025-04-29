import { Router } from "express";
import { customerController } from "./customer.controller";

const router = Router();

// create a new customer
router.post("/", customerController.createCustomer);
// get all customers
router.get("/", customerController.getAllCustomers);
// get a customer by id
router.get("/:id", customerController.getCustomerById);
// update a customer by id
router.put("/:id", customerController.updateCustomer);
// delete a customer by id
router.delete("/:id", customerController.deleteCustomer);

export const customerRoutes = router;
