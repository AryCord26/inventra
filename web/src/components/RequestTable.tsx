import { Request } from '../types/Request';

interface Props {
  requests: Request[];
}

export default function RequestTable({
  requests
}: Props) {

  function getStatusColor(status: string) {

    switch (status) {

      case 'APPROVED':
        return 'text-green-600';

      case 'REJECTED':
        return 'text-red-600';

      case 'DELIVERED':
        return 'text-blue-600';

      default:
        return 'text-yellow-600';
    }
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Histórico de Solicitações
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3 text-left">
              Produto
            </th>

            <th className="p-3 text-left">
              Quantidade
            </th>

            <th className="p-3 text-left">
              Usuário
            </th>

            <th className="p-3 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {requests.map((request) => (

            <tr
              key={request.id}
              className="border-b"
            >

              <td className="p-3">
                {request.product?.name}
              </td>

              <td className="p-3">
                {request.quantity}
              </td>

              <td className="p-3">
                {request.user?.name}
              </td>

              <td
                className={`p-3 font-semibold ${getStatusColor(
                  request.status
                )}`}
              >
                {request.status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
