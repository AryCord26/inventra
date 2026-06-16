'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {

  const router = useRouter();

  const { login } = useAuth();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState('');

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      setError('');

      await login(
        email,
        password
      );

      router.push('/dashboard');

    } catch (err: any) {

      setError(
        err?.response?.data?.message ||
        'Erro ao realizar login'
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-100
      "
    >

      <div
        className="
          bg-white
          p-8
          rounded-xl
          shadow-lg
          w-full
          max-w-md
        "
      >

        <div className="text-center mb-8">

          <h1
            className="
              text-3xl
              font-bold
              text-blue-600
            "
          >
            Inventra
          </h1>

          <p className="text-gray-500 mt-2">
            Plataforma de Gestão de Inventário
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-1
              "
            >
              E-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Digite seu e-mail"
              required
            />

          </div>

          <div>

            <label
              className="
                block
                text-sm
                font-medium
                mb-1
              "
            >
              Senha
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
              placeholder="Digite sua senha"
              required
            />

          </div>

          {error && (

            <div
              className="
                bg-red-100
                text-red-600
                p-3
                rounded-lg
                text-sm
              "
            >
              {error}
            </div>

          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-lg
              hover:bg-blue-700
              transition
            "
          >

            {loading
              ? 'Entrando...'
              : 'Entrar'}

          </button>

        </form>

        <div
          className="
            mt-6
            text-center
            text-sm
            text-gray-500
          "
        >

          Usuário de teste:

          <br />

          <strong>
            admin@inventra.com
          </strong>

          <br />

          Senha:

          <strong>
            {' '}admin123
          </strong>

        </div>

      </div>

    </main>
  );
}
