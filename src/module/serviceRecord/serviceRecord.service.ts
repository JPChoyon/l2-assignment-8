import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createServiceRecord = async (data: any) => {
  return await prisma.serviceRecord.create(data);
};
const getAllServiceRecords = async () => {
  return await prisma.serviceRecord.findMany();
};
export const serviceRecordService = {
  createServiceRecord,
  getAllServiceRecords,
};
