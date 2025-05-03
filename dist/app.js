"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const customer_routes_1 = require("./module/Customer/customer.routes");
const bike_route_1 = require("./module/Bike/bike.route");
const serviceRecord_routes_1 = require("./module/serviceRecord/serviceRecord.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send({
        message: " server is running",
    });
});
app.use("/api/customers", customer_routes_1.customerRoutes);
app.use("/api/bikes", bike_route_1.bikeRoutes);
app.use("/api/services", serviceRecord_routes_1.serviceRoutes);
exports.default = app;
