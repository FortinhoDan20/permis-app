import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages

import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import ListPartner from './pages/partner/ListPartner';
import NewPartner from './pages/partner/NewPartner';
import SignIn from './pages/auth/SignIn';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route index element={<Dashboard/>}/>
          <Route path="/new-partner" element={<NewPartner />} />
          <Route path="/list-partner" element={<ListPartner />} />
        </Route>
        <Route path="/login" element={<SignIn/>} />
        
      </Routes>
    </>
  );
}

export default App;
