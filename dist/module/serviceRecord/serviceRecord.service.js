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
exports.serviceRecordService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createServiceRecord = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.serviceRecord.create(data);
});
const getAllServiceRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.serviceRecord.findMany();
});
const getServiceRecordsbyId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
});
const completeService = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield prisma.serviceRecord.findUnique({
        where: { serviceId: id },
    });
    if (!existing) {
        throw new Error("Service record not found");
    }
    const parsedDate = completionDate ? new Date(completionDate) : new Date();
    const result = yield prisma.serviceRecord.update({
        where: { serviceId: id },
        data: {
            completionDate: parsedDate,
            status: "done",
        },
    });
    return result;
});
const getPendingOrOverdueServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return yield prisma.serviceRecord.findMany({
        where: {
            OR: [{ status: "pending" }, { status: "in-progress" }],
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
});
exports.serviceRecordService = {
    createServiceRecord,
    getAllServiceRecords,
    getServiceRecordsbyId,
    completeService,
    getPendingOrOverdueServices,
};
