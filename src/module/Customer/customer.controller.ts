import { Request, Response } from "express";
import { customerService } from "./customer.service";

const createCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await customerService.createCustomer(req.body);

    res.status(201).send({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).send({
        success: false,
        message: "Customer's email already exists",
        error: error.message,
      });
    } else {
      res.status(500).send({
        success: false,
        message: "Internal server error",
        error: error.message,
        stack: error.stack,
      });
    }
  }
};

const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
  try {
    const customers = await customerService.getAllCustomers();
    if (customers.length === 0) {
      res.status(404).send({
        success: false,
        message: "Customer not found",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "Customer fetched successfully",
      data: customers,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
      stack: error.stack,
    });
  }
};
const getCustomerById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const customer = await customerService.getCustomerById(id);

    if (!customer) {
      res.status(404).send({
        success: false,
        message: "Customer not found",
        error: `No customer exists with ID: ${id}`,
      });
      return;
    }

    res.status(200).send({
      success: true,
      message: "Customer fetched successfully",
      data: customer,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
      stack: error.stack,
    });
  }
};
const updateCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await customerService.updateCustomer(id, req.body);

    res.status(200).send({
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      res.status(400).send({
        success: false,
        message: "Customer's email already exists",
        error: error.message,
        stack: error.stack,
      });
    } else {
      res.status(500).send({
        success: false,
        message: "Internal server error",
        error: error.message,
        stack: error.stack,
      });
    }
  }
};
const deleteCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await customerService.deleteCustomer(id);

    res.status(200).send({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
      stack: error.stack,
    });
  }
};
export const customerController = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
