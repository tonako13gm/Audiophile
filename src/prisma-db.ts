
import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

// const seedProducts = async () => {
//   const count = await prisma.product.count();
//   if (count === 0) {
//     await prisma.product.createMany({
//       data: [
//         { item: "Product 1", qty: 500 },
//         { item: "Product 2", qty: 700 },
//         { item: "Product 3", qty: 1000 },
//       ],
//     });
//   }
// };

// // Run seed if needed
// seedProducts();

export async function getFirstProduct(query: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.product.findFirst({
      where: {
        OR: [
          { item: { contains: query } },
        ],
      },
    });
  }
  return prisma.product.findFirst();
}

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [
          { item: { contains: query } },
        ],
      },
    });
  }
  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function addProduct(
  item: string,
  qty: number
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.create({
    data: { item, qty },
  });
}

export async function updateProduct(
  id: number,
  item: string,
  qty: number
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.update({
    where: { id },
    data: { item, qty },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: { id },
  });
}

export async function clearCart() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return await prisma.product.deleteMany({})
}


