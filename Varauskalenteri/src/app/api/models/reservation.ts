/* tslint:disable */
/* eslint-disable */
import { Item } from '../models/item';
import { User } from '../models/user';
export interface Reservation {
  endTime?: string;
  id?: number;
  owner?: User;
  startTime?: string;
  target?: Item;
}
