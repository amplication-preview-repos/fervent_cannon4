import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type BookingUpdateInput = {
  customerName?: string | null;
  endDate?: Date | null;
  house?: HouseWhereUniqueInput | null;
  startDate?: Date | null;
};
