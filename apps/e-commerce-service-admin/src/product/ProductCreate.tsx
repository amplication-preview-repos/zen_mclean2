import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="orderItems" reference="OrderItem">
          <SelectArrayInput
            optionText={OrderItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="SKU" source="sku" />
      </SimpleForm>
    </Create>
  );
};
