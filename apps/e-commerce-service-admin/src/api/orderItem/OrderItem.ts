import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  id: string;
  price: number | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
