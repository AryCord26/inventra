'use client';

import { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import {
  dashboardService
} from '../../services/dashboardService';

export default function ReportsPage() {

  const [metrics, setMetrics] =
    useState<any>(null);

  useEffect(() => {

    loadMetrics();

  }, []);

  async function loadMetrics() {

    try {

      const data =
        await dashboardService.getMetrics();

      setMetrics(data);

    } catch (error) {

      console.error(error);

    }
  }

  if (!metrics) {

    return (
      <div>
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

          <h1
            className="
              text-3xl
              font-bold
              mb-6
            "
          >
            Relatórios Gerenciais
          </h1>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            <div
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >
              <h2>Total de Usuários</h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {metrics.totalUsers}
              </p>
            </div>

            <div
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >
              <h2>Total de Produtos</h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {metrics.totalProducts}
              </p>
            </div>

            <div
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >
              <h2>Solicitações</h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {metrics.totalRequests}
              </p>
            </div>

            <div
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >
              <h2>Pendentes</h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {metrics.pendingRequests}
              </p>
            </div>

            <div
              className="
                bg-white
                p-6
                rounded-xl
                shadow
              "
            >
              <h2>Aprovadas</h2>

              <p
                className="
                  text-4xl
                  font-bold
                  mt-3
                "
              >
                {metrics.approvedRequests}
              </p>
            </div>

          </div>

          <div
            className="
              bg-white
              rounded-xl
              shadow
              p-6
              mt-8
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

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">
                    Produto
                  </th>

                  <th className="p-3 text-left">
                    Estoque
                  </th>

                  <th className="p-3 text-left">
                    Mínimo
                  </th>

                </tr>

              </thead>

              <tbody>

                {metrics.lowStockProducts?.map(
                  (product: any) => (

                    <tr
                      key={product.id}
                      className="border-b"
                    >

                      <td className="p-3">
                        {product.name}
                      </td>

                      <td className="p-3">
                        {product.quantity}
                      </td>

                      <td className="p-3">
                        {product.minimumStock}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>
  );
}
