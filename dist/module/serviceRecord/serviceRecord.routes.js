"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = require("express");
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const router = (0, express_1.Router)();
// create a new services record
router.post("/", serviceRecord_controller_1.serviceRecordController.createServiceRecord);
// get all services records
router.get("/", serviceRecord_controller_1.serviceRecordController.getAllServiceRecords);
// get a service record by id
router.get("/:id", serviceRecord_controller_1.serviceRecordController.getServiceRecordsbyId);
// update a service record by id
router.put("/:id", serviceRecord_controller_1.serviceRecordController.markServiceComplete);
// get all pending or overdue services
router.get("/status", serviceRecord_controller_1.serviceRecordController.getPendingOrOverdue);
exports.serviceRoutes = router;
