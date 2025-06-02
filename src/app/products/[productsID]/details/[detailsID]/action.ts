"use server";

import { addProduct, updateProduct, deleteProduct, clearCart } from '@/prisma-db'
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export type Errors = {
  item?: string;
  qty?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createProduct(formData: FormData) {

  const item = formData.get("item") as string;
  const qty = formData.get("qty") as string;

  const itemExist = await prisma.product.findFirst({
    where: { item: item },
  });

  if (itemExist) {
    const id = itemExist.id
    const newQty = itemExist.qty + parseInt(qty)
    await updateProduct(id, item, newQty)
  }
  else {
    await addProduct(item, parseInt(qty));
  }

}

// export async function editProduct(
//   id: number,
//   formData: FormData
// ) {
//   const item = formData.get("item") as string;
//   const qty = formData.get("qty") as string;

//   await updateProduct(id, item, parseInt(qty));
// }

export async function removeProduct(id: number) {
  await deleteProduct(id);
}

export async function deleteAll() {
  await clearCart();
}