import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type RoomCreateInput = {
  house?: HouseWhereUniqueInput | null;
  name?: string | null;
  size?: number | null;
};
