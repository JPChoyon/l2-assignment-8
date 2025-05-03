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
exports.serviceRecordController = exports.getPendingOrOverdue = void 0;
const serviceRecord_service_1 = require("./serviceRecord.service");
const createServiceRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield req.body;
        const result = yield serviceRecord_service_1.serviceRecordService.createServiceRecord({
            data,
        });
        res.status(201).send({
            success: true,
            message: "Service record created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
const getAllServiceRecords = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceRecords = yield serviceRecord_service_1.serviceRecordService.getAllServiceRecords();
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
const getServiceRecordsbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const serviceRecord = yield serviceRecord_service_1.serviceRecordService.getServiceRecordsbyId(id);
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
const markServiceComplete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.params;
        // Safely get completionDate if it exists
        const completionDate = (_a = req.body) === null || _a === void 0 ? void 0 : _a.completionDate;
        const data = yield serviceRecord_service_1.serviceRecordService.completeService(id, completionDate);
        res.status(200).send({
            success: true,
            message: "Service marked as completed",
            data,
        });
    }
    catch (error) {
        if (error.message === "Service record not found") {
            res.status(404).send({
                success: false,
                message: error.message,
            });
        }
        else {
            res.status(500).send({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }
});
const getPendingOrOverdue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield serviceRecord_service_1.serviceRecordService.getPendingOrOverdueServices();
        res.status(200).send({
            success: true,
            message: "Overdue or pending services fetched successfully",
            data,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
exports.getPendingOrOverdue = getPendingOrOverdue;
exports.serviceRecordController = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordsbyId,
    markServiceComplete,
    getPendingOrOverdue: exports.getPendingOrOverdue,
};
