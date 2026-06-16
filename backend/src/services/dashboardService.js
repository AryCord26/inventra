const prisma = require('../config/database');

class DashboardService {

  async getMetrics() {

    const totalUsers =
      await prisma.user.count();

    const totalProducts =
      await prisma.product.count();

    const totalRequests =
      await prisma.request.count();

    const pendingRequests =
      await prisma.request.count({
        where: {
          status: 'PENDING'
        }
      });

    const approvedRequests =
      await prisma.request.count({
        where: {
          status: 'APPROVED'
        }
      });

    const lowStockProducts =
      await prisma.product.findMany();

    const lowStock =
      lowStockProducts.filter(
        product =>
          product.quantity <= product.minimumStock
      );

    return {
      totalUsers,
      totalProducts,
      totalRequests,
      pendingRequests,
      approvedRequests,
      lowStockProducts: lowStock
    };
  }
}

module.exports = new DashboardService();
