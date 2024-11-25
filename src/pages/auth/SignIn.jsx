
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../features/auth/authSlice";


const initialState = {
  username: "",
  password: ""
}

const SignIn = () => {

  const [formValue, setFormValue] = useState(initialState)
  const { username, password } = formValue
  const dispatch = useDispatch()

  const handleChange = (e) => {
    
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('data :', formValue)
    dispatch(signin(formValue))
    handleClear()

  }

  const handleClear = () => {
    setFormValue({ username: "", password:""})
  }
  const canSave = Boolean(username) && Boolean(password)
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          ONYX APP
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              CONNEXION
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nom utilisateur
                </label>
                <input
                  type="text"
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required="true"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="true"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              

              <button 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={!canSave}
                onClick={handleSubmit}
              
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
