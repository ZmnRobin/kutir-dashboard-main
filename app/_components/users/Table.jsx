import Image from 'next/image';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Role from '@/app/_components/users/Role';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UserList } from '@/app/lib/data';
import Link from 'next/link';

export default function Table() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  UserName
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Role
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Creation Date
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-white">
              {UserList?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/human.jpg"
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.name}'s profile picture`}
                      />
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Role role={user.role} />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(user.creationDate)}
                  </td>
                 
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                        <Link
                            href="#"
                            className="rounded-md border p-2 hover:bg-gray-100"
                            >
                            <PencilIcon className="w-5" />
                        </Link>
                        <Link href="#" className="rounded-md border p-2 hover:bg-gray-100">
                            <TrashIcon className="w-5" />
                        </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
