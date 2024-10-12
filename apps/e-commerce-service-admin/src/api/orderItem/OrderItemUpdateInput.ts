import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
