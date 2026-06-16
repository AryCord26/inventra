export interface LowStockProduct {
  id: number;
  name: string;
  quantity: number;
  minimumStock: number;
}

export interface Dashboard {
  totalUsers: number;
  totalProducts: number;
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;

  lowStockProducts: LowStockProduct[];
}
