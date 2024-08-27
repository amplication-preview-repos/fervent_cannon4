import { JsonValue } from "type-fest";
import { Room } from "../room/Room";

export type House = {
  address: string | null;
  bookings: JsonValue;
  createdAt: Date;
  id: string;
  price: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
