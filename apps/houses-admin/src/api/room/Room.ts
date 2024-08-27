import { House } from "../house/House";

export type Room = {
  createdAt: Date;
  house?: House | null;
  id: string;
  name: string | null;
  size: number | null;
  updatedAt: Date;
};
