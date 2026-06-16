'use client';

import { useEffect, useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

import { userService } from '../../services/userService';

export default function UsersPage() {

  const [users, setUsers] =
    useState<any[]>([]);

  useEffect(() => {

    loadUsers();

  }, []);

  async function loadUsers() {

    try {

      const data =
        await userService.getAll();

      setUsers(data);

    } catch (error) {

      console.error(error);

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
            "
          >

            <h2
              className="
                text-xl
                font-semibold
                mb-4
              "
            >
              Usuários
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">
                    Nome
                  </th>

                  <th className="p-3 text-left">
                    Email
                  </th>

                  <th className="p-3 text-left">
                    Perfil
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user) => (

                  <tr
                    key={user.id}
                    className="border-b"
                  >

                    <td className="p-3">
                      {user.name}
                    </td>

                    <td className="p-3">
                      {user.email}
                    </td>

                    <td className="p-3">
                      {user.role}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </main>

      </div>

    </div>
  );
}
