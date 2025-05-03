import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createServiceRecord = async (data: any) => {
  return await prisma.serviceRecord.create(data);
};
const getAllServiceRecords = async () => {
  return await prisma.serviceRecord.findMany();
};
const getServiceRecordsbyId = async (id: string) => {
  return await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });
};
const completeService = async (id: string, completionDate?: string | Date) => {
  const existing = await prisma.serviceRecord.findUnique({
    where: { serviceId: id },
  });

  if (!existing) {
    throw new Error("Service record not found");
  }

  const parsedDate = completionDate ? new Date(completionDate) : new Date();

  const result = await prisma.serviceRecord.update({
    where: { serviceId: id },
    data: {
      completionDate: parsedDate,
      status: "done",
    },
  });

  return result;
};

const getPendingOrOverdueServices = async () => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  return await prisma.serviceRecord.findMany({
    where: {
      OR: [{ status: "pending" }, { status: "in-progress" }],
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });
};
export const serviceRecordService = {
  createServiceRecord,
  getAllServiceRecords,
  getServiceRecordsbyId,
  completeService,
  getPendingOrOverdueServices,
};
