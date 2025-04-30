import { Router } from "express";
import { bikeController } from "./bike.controller";

const router = Router();

// create a new bike
router.post("/", bikeController.createBike);
// get all bike
router.get("/", bikeController.getAllBikes);
// get a bike by id
router.get("/:id", bikeController.getBikeById);

export const bikeRoutes = router;
