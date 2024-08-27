import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";

export type BookingCreateInput = {
  customerName?: string | null;
  endDate?: Date | null;
  house?: HouseWhereUniqueInput | null;
  startDate?: Date | null;
};
