import express, { Application, Request, Response } from "express";
import cors from "cors";
import { customerRoutes } from "./module/Customer/customer.routes";
import { bikeRoutes } from "./module/Bike/bike.route";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: " server is running",
  });
});

app.use("/api/customers", customerRoutes);
app.use("/api/bikes", bikeRoutes);

export default app;
