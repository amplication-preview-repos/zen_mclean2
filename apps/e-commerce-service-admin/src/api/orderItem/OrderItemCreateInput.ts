import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemCreateInput = {
  price?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
