import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const HouseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <div />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="rooms"
          reference="Room"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RoomTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
