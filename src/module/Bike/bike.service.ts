import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBike = async (data: {
  customerId: string;
  brand: string;
  model: string;
  year: number;
}) => {
  // Check customer exists
  const customer = await prisma.customer.findUnique({
    where: { customerId: data.customerId },
  });

  if (!customer) {
    throw new Error("Customer not found");
  }

  const result = await prisma.bike.create({
    data: {
      customerId: data.customerId,
      brand: data.brand,
      model: data.model,
      year: data.year,
    },
  });

  return result;
};

const getAllBikes = async () => {
  const bikes = await prisma.bike.findMany({
    include: {
      customer: false,
    },
  });

  return bikes;
};

const getBikeById = async (id: string) => {
  const bike = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
    include: {
      customer: false,
    },
  });

  return bike;
};

export const bikeService = {
  createBike,
  getAllBikes,
  getBikeById,
};
