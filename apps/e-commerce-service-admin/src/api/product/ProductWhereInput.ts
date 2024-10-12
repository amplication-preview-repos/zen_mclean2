import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  price?: FloatNullableFilter;
  sku?: StringNullableFilter;
};
