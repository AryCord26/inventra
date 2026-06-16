'use client';

import { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import RequestTable from '../../components/RequestTable';

import { requestService } from '../../services/requestService';
import { productService } from '../../services/productService';

import { Request } from '../../types/Request';
import { Product } from '../../types/Product';

export default function RequestsPage() {

  const [requests, setRequests] =
    useState<Request[]>([]);

  const [products, setProducts] =
    useState<Product[]>([]);

  const [productId, setProductId] =
    useState('');

  const [quantity, setQuantity] =
    useState('');

  useEffect(() => {

    loadData();

  }, []);

  async function loadData() {

    try {

      const requestsData =
        await requestService.getAll();

      const productsData =
        await productService.getAll();

      setRequests(requestsData);

      setProducts(productsData);

    } catch (error) {

      console.error(error);

    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await requestService.create({
        productId: Number(productId),
        quantity: Number(quantity)
      });

      setProductId('');
      setQuantity('');

      loadData();

    } catch (error) {

      console.error(error);

      alert(
        'Erro ao criar solicitação'
      );

    }
  }

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">

          <div
            className="
              bg-white
              rounded-xl
              shadow
              p-6
              mb-6
            "
          >

            <h2
              className="
                text-xl
                font-semibold
                mb-4
              "
            >
              Nova Solicitação
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4"
            >

              <select
                value={productId}
                onChange={(e) =>
                  setProductId(
                    e.target.value
                  )
                }
                className="
                  border
                  rounded-lg
                  p-3
                "
                required
              >

                <option value="">
                  Selecione um produto
                </option>

                {products.map(
                  (product) => (

                    <option
                      key={product.id}
                      value={product.id}
                    >
                      {product.name}
                    </option>

                  )
                )}

              </select>

              <input
                type="number"
                placeholder="Quantidade"
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    e.target.value
                  )
                }
                className="
                  border
                  rounded-lg
                  p-3
                "
                required
              />

              <button
                type="submit"
                className="
                  bg-blue-600
                  text-white
                  p-3
                  rounded-lg
                  hover:bg-blue-700
                "
              >
                Solicitar Produto
              </button>

            </form>

          </div>

          <RequestTable
            requests={requests}
          />

        </main>

      </div>

    </div>
  );
}
