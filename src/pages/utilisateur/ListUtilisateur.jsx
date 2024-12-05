import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllUsers } from "../../features/user/userSlice";

const ListUtilisateur = () => {
  const auth = useSelector((state) => state.auth);
  const { currentUser } = auth;
  const { allUsers } = useSelector((state) => state.user);

  console.log("all users :", allUsers);

  const dispatch = useDispatch();
  console.log("data:", allUsers.length > 0);

  useEffect(() => {
    dispatch(getAllUsers(currentUser.token));
  }, []);

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            LISTE DES UTILISATEURS
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}
          <NavLink to="/nouvel-utilisateur">
            <button className="btn  bg-blue-500 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
              <svg
                className="fill-current shrink-0 xs:hidden"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="max-xs:sr-only">Nouvel Utilisateur</span>
            </button>
          </NavLink>
        </div>
      </div>
      {allUsers.length > 0 ? (
        <>
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
                  {allUsers.map((user, i) => {
                    return (
                      <>
                        <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
                          <tr key={user._id}>
                            <td className="p-2">
                              <div className="text-center">{i + 1}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{user.name}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{user.lastName}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {user.firstName}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">{user.sex}</div>
                            </td>
                            <td className="p-2">
                              <div className="text-center">
                                {user.typeUser.name}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <svg
            className="w-16 h-16 animate-spin text-gray-900/50"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-900"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default ListUtilisateur;
