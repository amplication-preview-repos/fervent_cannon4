import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  bookings?: JsonFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  rooms?: RoomListRelationFilter;
};
