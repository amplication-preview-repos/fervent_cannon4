import { BookingCreateNestedManyWithoutHousesInput } from "./BookingCreateNestedManyWithoutHousesInput";
import { RoomCreateNestedManyWithoutHousesInput } from "./RoomCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  address?: string | null;
  bookings?: BookingCreateNestedManyWithoutHousesInput;
  price?: number | null;
  rooms?: RoomCreateNestedManyWithoutHousesInput;
};
