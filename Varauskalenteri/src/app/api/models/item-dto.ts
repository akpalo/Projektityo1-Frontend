/* tslint:disable */
/* eslint-disable */
import { ImageDto } from '../models/image-dto';
export interface ItemDto {
  description?: string | null;
  id?: number;
  images?: Array<ImageDto> | null;
  name?: string | null;
  owner?: number;
  value?: number; 
}
