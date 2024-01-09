import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/_components/users/Search';
import Table from '@/app/_components/users/Table';
import { CreateUser } from '@/app/_components/users/Buttons';
 
export default function UsersPage() {

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className='text-2xl'>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search users..." />
        <CreateUser/>
      </div>
        <Table/>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
