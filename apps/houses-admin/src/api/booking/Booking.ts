import { House } from "../house/House";

export type Booking = {
  createdAt: Date;
  customerName: string | null;
  endDate: Date | null;
  house?: House | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
};
