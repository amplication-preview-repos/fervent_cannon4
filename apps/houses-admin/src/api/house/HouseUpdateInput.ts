import { BookingUpdateManyWithoutHousesInput } from "./BookingUpdateManyWithoutHousesInput";
import { RoomUpdateManyWithoutHousesInput } from "./RoomUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  address?: string | null;
  bookings?: BookingUpdateManyWithoutHousesInput;
  price?: number | null;
  rooms?: RoomUpdateManyWithoutHousesInput;
};
