import { User } from './User';
import { Product } from './Product';

export interface Request {
  id: number;
  quantity: number;
  status: string;

  user: User;
  product: Product;
}
