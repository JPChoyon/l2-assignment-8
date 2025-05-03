"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoutes = void 0;
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const router = (0, express_1.Router)();
// create a new bike
router.post("/", bike_controller_1.bikeController.createBike);
// get all bike
router.get("/", bike_controller_1.bikeController.getAllBikes);
// get a bike by id
router.get("/:id", bike_controller_1.bikeController.getBikeById);
exports.bikeRoutes = router;
