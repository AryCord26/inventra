import { Product } from './Product';
import { User } from './User';

export interface Request {
  id: number;
  quantity: number;
  status: string;
  product: Product;
  user: User;
}
