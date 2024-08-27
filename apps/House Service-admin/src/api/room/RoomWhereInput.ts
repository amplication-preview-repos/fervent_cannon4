import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RoomWhereInput = {
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  size?: IntNullableFilter;
};
