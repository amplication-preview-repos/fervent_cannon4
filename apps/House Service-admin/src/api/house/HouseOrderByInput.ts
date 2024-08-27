import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  address?: SortOrder;
  bookings?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
