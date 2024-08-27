import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  customerName?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
};
