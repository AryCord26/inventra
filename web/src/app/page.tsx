import Link from 'next/link';

export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-xl shadow-md text-center">

        <h1 className="text-4xl font-bold mb-4">
          Inventra
        </h1>

        <p className="mb-6">
          Plataforma de Gestão de Inventário
        </p>

        <Link
          href="/login"
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Entrar
        </Link>

      </div>

    </main>
  );
}
