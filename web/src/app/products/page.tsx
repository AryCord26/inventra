'use client';

import { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProductTable from '../../components/ProductTable';

import { productService } from '../../services/productService';

import { Product } from '../../types/Product';

export default function ProductsPage() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [name, setName] =
    useState('');

  const [description, setDescription] =
    useState('');

  const [quantity, setQuantity] =
    useState('');

  const [minimumStock, setMinimumStock] =
    useState('');

  useEffect(() => {

    loadProducts();

  }, []);

  async function loadProducts() {

    try {

      const data =
        await productService.getAll();

      setProducts(data);

    } catch (error) {

      console.error(error);

    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      await productService.create({
        name,
        description,
        quantity: Number(quantity),
        minimumStock: Number(minimumStock)
      });

      setName('');
      setDescription('');
      setQuantity('');
      setMinimumStock('');

      loadProducts();

    } catch (error) {

      console.error(error);

      alert('Erro ao cadastrar produto');

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
              Novo Produto
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4"
            >

              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="
                  border
                  rounded-lg
                  p-3
                "
                required
              />

              <input
                type="text"
                placeholder="Descrição"
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="
                  border
                  rounded-lg
                  p-3
                "
              />

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

              <input
                type="number"
                placeholder="Estoque Mínimo"
                value={minimumStock}
                onChange={(e) =>
                  setMinimumStock(
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
                Cadastrar Produto
              </button>

            </form>

          </div>

          <ProductTable
            products={products}
          />

        </main>

      </div>

    </div>
  );
}
