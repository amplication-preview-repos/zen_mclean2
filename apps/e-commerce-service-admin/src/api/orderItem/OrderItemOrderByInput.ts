import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
