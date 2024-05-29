import { customerData } from '../../data';

const Users = () => {
  return (
    <div className="h-screen">
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
                      Email
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Phone Number
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Postal Code
                    </th>
                    <th className="w-1/6 min-w-[150px] border-l border-transparent px-3 py-4 text-lg font-semibold lg:px-4 lg:py-3">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customerData.map((user, index) => (
                    <tr key={user.id}>
                      <td className="border-b border-l border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {index + 1}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {user.name}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.email}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.phoneNumber}
                      </td>
                      <td className="border-b border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                        {user.postalCode}
                      </td>
                      <td className="border-b border-r border-black px-2 py-3 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                        {user.address}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
