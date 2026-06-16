'use client';

import { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import DashboardCard from '../../components/DashboardCard';

import {
  dashboardService
} from '../../services/dashboardService';

export default function DashboardPage() {

  const [dashboard, setDashboard] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadDashboard();

  }, []);

  async function loadDashboard() {

    try {

      const data =
        await dashboardService.getMetrics();

      setDashboard(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  if (loading) {

    return (
      <div
        className="
          flex
          items-center
          justify-center
          min-h-screen
        "
      >
        Carregando...
      </div>
    );
  }

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-5
              gap-6
            "
          >

            <DashboardCard
              title="Usuários"
              value={dashboard.totalUsers}
            />

            <DashboardCard
              title="Produtos"
              value={dashboard.totalProducts}
            />

            <DashboardCard
              title="Solicitações"
              value={dashboard.totalRequests}
            />

            <DashboardCard
              title="Pendentes"
              value={dashboard.pendingRequests}
            />

            <DashboardCard
              title="Aprovadas"
              value={dashboard.approvedRequests}
            />

          </div>

          <div
            className="
              mt-10
              bg-white
              rounded-xl
              shadow
              p-6
            "
          >

            <h2
              className="
                text-xl
                font-semibold
                mb-4
              "
            >
              Produtos com Estoque Baixo
            </h2>

            {dashboard.lowStockProducts?.length === 0 ? (

              <p>
                Nenhum produto com estoque baixo.
              </p>

            ) : (

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left p-2">
                      Produto
                    </th>

                    <th className="text-left p-2">
                      Estoque
                    </th>

                    <th className="text-left p-2">
                      Mínimo
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {dashboard.lowStockProducts?.map(
                    (product: any) => (

                      <tr
                        key={product.id}
                        className="border-b"
                      >

                        <td className="p-2">
                          {product.name}
                        </td>

                        <td className="p-2">
                          {product.quantity}
                        </td>

                        <td className="p-2">
                          {product.minimumStock}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            )}

          </div>

        </main>

      </div>

    </div>
  );
}
