import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  houseId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
