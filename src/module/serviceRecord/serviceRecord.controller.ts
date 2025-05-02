import { Request, Response } from "express";
import { serviceRecordService } from "./serviceRecord.service";

const createServiceRecord = async (req: Request, res: Response) => {
  try {
    const data = await req.body;
    const result = await serviceRecordService.createServiceRecord({
      data,
    });

    res.status(201).send({
      success: true,
      message: "Service record created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllServiceRecords = async (req: Request, res: Response) => {
  try {
    const serviceRecords = await serviceRecordService.getAllServiceRecords();
    if (serviceRecords.length === 0) {
      res.status(404).send({
        success: false,
        message: "Service records not found",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "Service records fetched successfully",
      data: serviceRecords,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const serviceRecordController = {
  createServiceRecord,
  getAllServiceRecords,
};
