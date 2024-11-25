import React from 'react';

const text = () => {
  return (
    
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">

      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">N°</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Nom</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Postnom</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Prénom</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sexe</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Rôle</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            {
                allUsers.map((user, i) => {

                  return(
                    <>
                       
                      <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">           
                        <tr key={user._id}>
                          <td className="p-2">
                            <div className="text-center">
                              { i+1}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              { user.name}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              {user.lastName}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              { user.firstName}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              { user.sex}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="text-center">
                              { user.typeUser.name
                              }
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </>
                  )
                })
              }
           
          </table>
        </div>
      </div>
    </div>
  );
}

export default text;
