import React from 'react';

const Utilisateur = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Nouvel Utilisateur
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}
        </div>
      </div>
      <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <form className="space-y-4 md:space-y-6">
            <div className="flex mb-4">
                <div className="w-1/3  mx-1 h-12">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                 Nom de l'Acquéreur
                </label>
                <input
                  type="text"
                  name="nom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nom de l'Acquéreur"
                  required
                />
                </div>
                <div className="w-1/2 mx-1">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Postnom
                </label>
                <input
                  type="text"
                  name="postnom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Postnom de l'acquéreur"
                  required
                />
                </div>
                <div className="w-1/4  mx-1 ">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Prénom de l'acquéreur"
                  required
                />
                </div>


              </div>

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sexe
                </label>
                <input
                  type="text"
                  name="sexe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="sexe de l'acquéreur"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Service
                </label>
                <input
                  type="text"
                  name="service"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Service"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Grade
                </label>
                <input
                  type="text"
                  name="grade"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Grade utilisateur"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Rôle utilisateur
                </label>
                <select
                 type="text"
                  name="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Rôle utilisateur"
                  required
                >   
                <option selected> Choissisez la pièce</option>
                <option value="Carte d'électeur"> Carte d'Electeur</option>
                <option value="Passeport"> Passeport</option>

                </select>

              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Site d'Affectation
                </label>
                <input
                  type="text"
                  name="site"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Site d'affectation"
                  required
                />
              </div>


              <button class="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Utilisateur;
