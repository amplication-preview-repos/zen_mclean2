import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
