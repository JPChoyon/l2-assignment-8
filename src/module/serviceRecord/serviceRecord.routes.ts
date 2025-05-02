import { Router } from "express";
import { serviceRecordController } from "./serviceRecord.controller";


const router = Router();

// create a new customer
router.post("/", serviceRecordController.createServiceRecord);
// get all customers
router.get("/", serviceRecordController.getAllServiceRecords);
// // get a customer by id
// router.get("/:id", customerController.getCustomerById);
// // update a customer by id
// router.put("/:id", customerController.updateCustomer);
// // delete a customer by id
// router.delete("/:id", customerController.deleteCustomer);

export const serviceRoutes = router;
