"use server";

import { addProduct, deleteProduct, clearCart } from '@/src/prisma-db'
import { PrismaClient } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export type Errors = {
  item?: string;
  qty?: string;
};

export type FormState = {
  errors: Errors;
};

export async function updateProduct(id: number, item: string, qty: number) {
  await prisma.product.update({
    where: { id: id },
    data: { item: item, qty: qty },
  });
}

export async function createProduct(formData: FormData) {

  const item = formData.get("item") as string;
  const qty = formData.get("qty") as string;

  console.log(formData.get("item"));
  console.log(qty);

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
  revalidatePath('/cart');
  revalidatePath('/');
}

export async function incrementProduct(id: number) {
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  if (product) {
    await updateProduct(id, product.item, product.qty + 1);
    revalidatePath('/cart');
  }
}