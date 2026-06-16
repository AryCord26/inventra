'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {

  const pathname = usePathname();

  const menuItems = [
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Produtos',
      href: '/products'
    },
    {
      label: 'Solicitações',
      href: '/requests'
    },
    {
      label: 'Usuários',
      href: '/users'
    },
    {
      label: 'Relatórios',
      href: '/reports'
    }
  ];

  return (
    <aside
      className="
        w-64
        bg-slate-900
        text-white
        min-h-screen
        p-6
      "
    >
      <h1
        className="
          text-2xl
          font-bold
          mb-10
        "
      >
        Inventra
      </h1>

      <nav>
        {menuItems.map((item) => (

          <Link
            key={item.href}
            href={item.href}
            className={`
              block
              p-3
              rounded-lg
              mb-2
              transition
              ${
                pathname === item.href
                  ? 'bg-blue-600'
                  : 'hover:bg-slate-800'
              }
            `}
          >
            {item.label}
          </Link>

        ))}
      </nav>
    </aside>
  );
}
