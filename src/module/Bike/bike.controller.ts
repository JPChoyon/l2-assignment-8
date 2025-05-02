import { Request, Response } from "express";
import { bikeService } from "./bike.service";

const createBike = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await bikeService.createBike(req.body);

    res.status(201).send({
      success: true,
      message: "Bike added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message || "Internal server error",
      error: error.message,
    });
  }
};

const getAllBikes = async (req: Request, res: Response): Promise<void> => {
  try {
    const bikes = await bikeService.getAllBikes();
    if (bikes.length === 0) {
      res.status(404).send({
        success: false,
        message: "Bike not found",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "Bike fetched successfully",
      data: bikes,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getBikeById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const bike = await bikeService.getBikeById(id);

    if (!bike) {
      res.status(404).send({
        success: false,
        message: "Bike not found",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "Bike fetched successfully",
      data: bike,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const bikeController = {
  createBike,
  getAllBikes,
  getBikeById,
};
