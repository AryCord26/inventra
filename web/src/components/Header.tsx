'use client';

import { useAuth } from '../hooks/useAuth';

export default function Header() {

  const {
    user,
    logout
  } = useAuth();

  return (
    <header
      className="
        bg-white
        shadow-sm
        p-4
        flex
        justify-between
        items-center
      "
    >

      <h2
        className="
          text-xl
          font-semibold
        "
      >
        Dashboard
      </h2>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <span>
          {user?.name}
        </span>

        <button
          onClick={logout}
          className="
            bg-red-500
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          Sair
        </button>

      </div>

    </header>
  );
}
