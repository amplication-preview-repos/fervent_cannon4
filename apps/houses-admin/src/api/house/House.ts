import { Booking } from "../booking/Booking";
import { Room } from "../room/Room";

export type House = {
  address: string | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  price: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
