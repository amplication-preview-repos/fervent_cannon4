import { InputJsonValue } from "../../types";
import { RoomCreateNestedManyWithoutHousesInput } from "./RoomCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  address?: string | null;
  bookings?: InputJsonValue;
  price?: number | null;
  rooms?: RoomCreateNestedManyWithoutHousesInput;
};
