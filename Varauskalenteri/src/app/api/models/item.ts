/* tslint:disable */
/* eslint-disable */
import { Image } from '../models/image';
import { User } from '../models/user';
export interface Item {
  accessCount?: number;
  description?: string | null;
  id?: number;
  images?: Array<Image> | null;
  name?: string | null;
  owner?: User;
}
