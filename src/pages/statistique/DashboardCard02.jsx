import React from 'react';
import { Link } from 'react-router-dom';
import LineChart from '../../charts/LineChart01';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {


  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Permis non Apuré</h2>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Voir plus
              </Link>
            </li>

          </EditMenu>
        </header>
        <div className="flex mb-4">
        <div className="w-1/2  mx-8 mt-4 h-12">
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
            Nombre
          </div>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
              24,780
            </div>
            <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
              +49%
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-1 mt-4 ">
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
            Montant{" "}
          </div>
          <div className="flex items-start">
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
              24,780
            </div>
            <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
              +49%
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default DashboardCard02;
