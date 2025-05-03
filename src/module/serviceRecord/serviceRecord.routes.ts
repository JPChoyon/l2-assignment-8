import { Router } from "express";
import { serviceRecordController } from "./serviceRecord.controller";

const router = Router();

// create a new services record
router.post("/", serviceRecordController.createServiceRecord);
// get all services records
router.get("/", serviceRecordController.getAllServiceRecords);
// get a service record by id
router.get("/:id", serviceRecordController.getServiceRecordsbyId);
// update a service record by id
router.put("/:id", serviceRecordController.markServiceComplete);
// get all pending or overdue services
router.get("/status", serviceRecordController.getPendingOrOverdue);

export const serviceRoutes = router;
