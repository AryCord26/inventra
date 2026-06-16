const prisma = require('../config/database');

class DashboardController {

  async index(req, res) {

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
      await prisma.product.findMany({
        where: {
          quantity: {
            lte: 5
          }
        }
      });

    return res.json({
      totalUsers,
      totalProducts,
      totalRequests,
      pendingRequests,
      approvedRequests,
      lowStockProducts
    });
  }
}

module.exports = new DashboardController();
