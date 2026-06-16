import { Product } from '../types/Product';

interface Props {
  products: Product[];
}

export default function ProductTable({
  products
}: Props) {

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Lista de Produtos
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">

            <th className="text-left p-3">
              Nome
            </th>

            <th className="text-left p-3">
              Descrição
            </th>

            <th className="text-left p-3">
              Estoque
            </th>

            <th className="text-left p-3">
              Mínimo
            </th>

          </tr>
        </thead>

        <tbody>

          {products.map((product) => (

            <tr
              key={product.id}
              className="border-b"
            >

              <td className="p-3">
                {product.name}
              </td>

              <td className="p-3">
                {product.description}
              </td>

              <td className="p-3">
                {product.quantity}
              </td>

              <td className="p-3">
                {product.minimumStock}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
