import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  rooms?: RoomListRelationFilter;
};
