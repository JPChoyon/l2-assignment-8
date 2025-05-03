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
exports.customerService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCustomer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
    };
    const result = yield prisma.customer.create({
        data: customerData,
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield prisma.customer.findMany();
    return customers;
});
const getCustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    return customer;
});
const updateCustomer = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
    };
    const result = yield prisma.customer.update({
        where: {
            customerId: id,
        },
        data: customerData,
    });
    return result;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.customerService = {
    createCustomer,
    getAllCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer
};
