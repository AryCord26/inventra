import { User } from './User';
import { Product } from './Product';

export interface Request {
  id: number;

  quantity: number;

  status:
    | 'PENDING'
    | 'APPROVED'
    | 'REJECTED'
    | 'DELIVERED';

  user: User;

  product: Product;
}
