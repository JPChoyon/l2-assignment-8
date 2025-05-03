"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const createCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customerService.createCustomer(req.body);
        res.status(201).send({
            success: true,
            message: "Customer created successfully",
            data: result,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            res.status(400).send({
                success: false,
                message: "Customer's email already exists",
                error: error.message,
            });
        }
        else {
            res.status(500).send({
                success: false,
                message: "Internal server error",
                error: error.message,
                stack: error.stack,
            });
        }
    }
});
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield customer_service_1.customerService.getAllCustomers();
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
            stack: error.stack,
        });
    }
});
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const customer = yield customer_service_1.customerService.getCustomerById(id);
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
            stack: error.stack,
        });
    }
});
const updateCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield customer_service_1.customerService.updateCustomer(id, req.body);
        res.status(200).send({
            success: true,
            message: "Customer updated successfully",
            data: result,
        });
    }
    catch (error) {
        if (error.code === "P2002") {
            res.status(400).send({
                success: false,
                message: "Customer's email already exists",
                error: error.message,
                stack: error.stack,
            });
        }
        else {
            res.status(500).send({
                success: false,
                message: "Internal server error",
                error: error.message,
                stack: error.stack,
            });
        }
    }
});
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield customer_service_1.customerService.deleteCustomer(id);
        res.status(200).send({
            success: true,
            message: "Customer deleted successfully",
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
            stack: error.stack,
        });
    }
});
exports.customerController = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
};
