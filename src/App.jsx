import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ListPartner from './pages/partner/ListPartner';
import NewPartner from './pages/partner/NewPartner';
import SignIn from './pages/auth/SignIn';
import Acquereur from './pages/acquereur/Acquereur';
import ListAcquereur from './pages/acquereur/ListAcquereur';
import Apurement from './pages/permis/Apurement';
import PermisImprime from './pages/permis/PermisImprime';
import PermisNA from './pages/permis/PermisNA';
import Utilisateur from './pages/utilisateur/Utilisateur';
import ListUtilisateur from './pages/utilisateur/ListUtilisateur';
import Journalier from './pages/rapport/Journalier';
import { useSelector } from 'react-redux';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  const { auth } = useSelector((state) => ({ ...state}))


  return (
    <>
     <ToastContainer/>
      <Routes>
     
        <Route exact path="/" element={!auth.currentUser ?  <SignIn/> : <MainLayout />}>
          <Route index element={!auth.currentUser ?  <SignIn/> :<Dashboard/>}/>
          <Route path="/acquereur" element={!auth.currentUser ?  <SignIn/> :<Acquereur />} />
          <Route path="/liste-acquereur" element={!auth.currentUser ?  <SignIn/> :<ListAcquereur />} />
          <Route path="/apurement" element={!auth.currentUser ?  <SignIn/> :<Apurement/>} />
          <Route path="/list-permis-imprime" element={!auth.currentUser ?  <SignIn/> :<PermisImprime />} />
          <Route path="/list-permis-non-apure" element={!auth.currentUser ?  <SignIn/> :<PermisNA />} />
          <Route path="/nouvel-utilisateur" element={!auth.currentUser ?  <SignIn/> :<Utilisateur />} />
          <Route path="/list-utilisateur" element={!auth.currentUser ?  <SignIn/> :<ListUtilisateur />} />
          <Route path="/rapport-journalier" element={!auth.currentUser ?  <SignIn/> :<Journalier />} />
          <Route path="/rapport-mensuel" element={!auth.currentUser ?  <SignIn/> :<ListUtilisateur />} />
          <Route path="/rapport-annuel" element={!auth.currentUser ?  <SignIn/> :<ListUtilisateur />} />
        </Route>
        <Route path="/login" element={<SignIn/>} />
        
      </Routes>
    </>
  );
}

export default App;
