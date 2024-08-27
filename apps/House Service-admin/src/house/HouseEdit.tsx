import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RoomTitle } from "../room/RoomTitle";

export const HouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
