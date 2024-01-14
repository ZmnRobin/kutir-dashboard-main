'use client'
import { useEffect, useState } from 'react';
import Search from '../../../_components/users/Search';
import Table from '../../../_components/users/Table';
import UserForm from '../../../_components/users/UserForm';
import {getAllUsers} from '../../../lib/api'
import { PlusIcon } from '@heroicons/react/24/outline';

export default function UsersPage() {
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]); // Initialize userList state
  const [updateUserId, setUpdateUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch user list when the component mounts
  const fetchData = async () => {
    const users = await getAllUsers();
    setUserList(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

   // Filter users based on the search term
  const filteredUsers = userList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const openCreateModal = () => {
    setUpdateUserId(null); // Reset updateUserId for create mode
    setShowModal(true);
  };

  const openUpdateModal = (userId) => {
    setUpdateUserId(userId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Users List</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search users..." onSearch={handleSearch}/>
        <button onClick={openCreateModal}  className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <span className="hidden md:block">Create User</span>{' '}
          <PlusIcon className="h-5 md:ml-4" />
          </button>
      </div>
      <Table userList={filteredUsers} setUserList={setUserList} openUpdateModal={openUpdateModal}/>
      <div className="mt-5 flex w-full justify-center">
      </div>

      {/* UserForm Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <UserForm
             closeModal={closeModal}
             fetchData={fetchData}
             isUpdateMode={updateUserId !== null}
             userId={updateUserId}
            />
          </div>
        </div>
      )}
    </div>
  );
}
