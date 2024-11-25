import React from 'react';

const Apurement = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
           Apurément Permis
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
      

              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  N° Note de perception
                </label>
                <input
                  type="text"
                  name="note"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numéro de la note de perception"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  N° Bordereau de paiement
                </label>
                <input
                  type="text"
                  name="bordereau"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numéro Bordéreau de paiement"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Motant payé
                </label>
                <input
                  type="text"
                  name="montant"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Montant payé"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date de paiement
                </label>
                <input
                  type="date"
                  name="montant"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Montant payé"
                  required
                />
              </div>

              <button class="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Enregistrement
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apurement;
