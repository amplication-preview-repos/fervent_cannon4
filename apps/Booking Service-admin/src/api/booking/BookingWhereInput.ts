import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  customerName?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  houseId?: StringNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
