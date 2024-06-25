import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/slices/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);

  const sortedUserData = Array.isArray(users) ? [...users].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) : [];

  useEffect(() => {
    dispatch(fetchUsers(token));
  }, [dispatch, token]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const totalPages = Math.ceil(sortedUserData.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sortedUserData.slice(indexOfFirstUser, indexOfLastUser);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen">
      <div className="px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">Users List</h2>
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="bg-[#D8AE7E] text-center">
                  <tr>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      No
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Name
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Username
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Email
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Phone Number
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Address
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Postal Code
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      City
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Role
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Tanggal Buat
                    </th>
                  </tr>
                </thead>
                {sortedUserData.length === 0 ? (
                  <div>No users found.</div>
                ) : (
                <tbody>
                  {currentUsers.map((user, index) => (
                    <tr key={user.id}>
                      <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {index + 1}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {user.name}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.username}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.email}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.phone_number}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {user.address}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.postal_code}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.city}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.role}
                      </td>
                      <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {new Date(user.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
                )}
              </table>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
