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

const getServiceRecordsbyId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const serviceRecord = await serviceRecordService.getServiceRecordsbyId(id);
    if (!serviceRecord) {
      res.status(404).send({
        success: false,
        message: "Service record not found",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "Service record fetched successfully",
      data: serviceRecord,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
const markServiceComplete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Safely get completionDate if it exists
    const completionDate = req.body?.completionDate;

    const data = await serviceRecordService.completeService(id, completionDate);

    res.status(200).send({
      success: true,
      message: "Service marked as completed",
      data,
    });
  } catch (error: any) {
    if (error.message === "Service record not found") {
      res.status(404).send({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).send({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  }
};

export const getPendingOrOverdue = async (req: Request, res: Response) => {
  try {
    const data = await serviceRecordService.getPendingOrOverdueServices();

    res.status(200).send({
      success: true,
      message: "Overdue or pending services fetched successfully",
      data,
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
  getServiceRecordsbyId,
  markServiceComplete,
  getPendingOrOverdue,
};
