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
exports.bikeService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createBike = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check customer exists
    const customer = yield prisma.customer.findUnique({
        where: { customerId: data.customerId },
    });
    if (!customer) {
        throw new Error("Customer not found");
    }
    const result = yield prisma.bike.create({
        data: {
            customerId: data.customerId,
            brand: data.brand,
            model: data.model,
            year: data.year,
        },
    });
    return result;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield prisma.bike.findMany({
        include: {
            customer: false,
        },
    });
    return bikes;
});
const getBikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const bike = yield prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
        include: {
            customer: false,
        },
    });
    return bike;
});
exports.bikeService = {
    createBike,
    getAllBikes,
    getBikeById,
};
