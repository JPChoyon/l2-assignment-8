import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCustomer = async (data: any) => {
  const customerData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const result = await prisma.customer.create({
    data: customerData,
  });

  return result;
};

const getAllCustomers = async () => {
  const customers = await prisma.customer.findMany();

  return customers;
};

const getCustomerById = async (id: string) => { 
  const customer = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  return customer;
}

const updateCustomer = async (id: string, data: any) => { 
  const customerData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: customerData,
  });

  return result;
}

const deleteCustomer = async (id: string) => { 
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });

  return result;
}

export const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
