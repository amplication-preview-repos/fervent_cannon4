import { InputJsonValue } from "../../types";
import { RoomUpdateManyWithoutHousesInput } from "./RoomUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  address?: string | null;
  bookings?: InputJsonValue;
  price?: number | null;
  rooms?: RoomUpdateManyWithoutHousesInput;
};
