import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type RoomUpdateInput = {
  house?: HouseWhereUniqueInput | null;
  name?: string | null;
  size?: number | null;
};
