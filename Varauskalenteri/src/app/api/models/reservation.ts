/* tslint:disable */
/* eslint-disable */
import { Item } from '../models/item';
import { User } from '../models/user';
export interface Reservation {
  endTime: Date;
  id?: number;
  owner?: User;
  startTime: Date;
  target?: Item;
}
