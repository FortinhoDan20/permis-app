import React from "react";

const Acquereur = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            Nouvel Acquéreur
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
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="sexe de l'acquéreur"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lieu de naissance
                </label>
                <input
                  type="text"
                  name="lieu"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="lieu de naissance de l'acquéreur"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nationlité
                </label>
                <input
                  type="text"
                  name="nationalite"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nationalité de l'acquéreur"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Pièce d'identité
                </label>
                <select
                 type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nom de l'acquéreur"
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
                  N° de la Pièce
                </label>
                <input
                  type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nom de l'acquéreur"
                  required
                />
              </div>
              <div className="flex mb-4">
                <div className="w-1/3  mx-1 h-12">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                 Avenue et Numéro
                </label>
                <input
                  type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Avenue, 100"
                  required
                />
                </div>
                <div className="w-1/2 mx-1">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quatier
                </label>
                <input
                  type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Quatier"
                  required
                />
                </div>
                <div className="w-1/3  mx-1 ">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Commune
                </label>
                <input
                  type="text"
                  name="prenom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Commune"
                  required
                />
                </div>

              </div>
              <div>
              <fieldset>
                <legend>Catégories</legend>
                <div>
                    <input type="checkbox" id="coding" name="interest" value="coding" />
                    <label  className="mx-1" for="coding">2 Roues</label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="interest" value="music" />
                    <label className="mx-1" for="music">Particulier 4 Roues 3.5 Ton</label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="interest" value="music" />
                    <label className="mx-1" for="music">Camion superieur à 3.5 Ton</label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="interest" value="music" />
                    <label className="mx-1" for="music">Bus Supérieur à 8PX+</label>
                </div>
                <div>
                    <input type="checkbox" id="music" name="interest" value="music" />
                    <label className="mx-1" for="music">Spécial</label>
                </div>
                </fieldset>
              </div>
              <button class="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acquereur;
