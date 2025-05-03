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
exports.bikeController = void 0;
const bike_service_1 = require("./bike.service");
const createBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.bikeService.createBike(req.body);
        res.status(201).send({
            success: true,
            message: "Bike added successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message || "Internal server error",
            error: error.message,
        });
    }
});
const getAllBikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikes = yield bike_service_1.bikeService.getAllBikes();
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
const getBikeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const bike = yield bike_service_1.bikeService.getBikeById(id);
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
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});
exports.bikeController = {
    createBike,
    getAllBikes,
    getBikeById,
};
