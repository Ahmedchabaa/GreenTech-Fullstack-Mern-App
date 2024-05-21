
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/details/Details';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { useState } from "react";
import Logout from './components/logout/Logout';
import Dashboard from './components/dashboard/Dashboard';
import Cards from './components/cards/Cards';
import Navvbare from './components/navvbare/Navvbare';
import Crproduit from './components/crproduit/Crproduit';
import Contact from './components/contact/Contact';
import Callus from './components/callus/Callus';
import ClientProfile from './components/client/ClientProfile';
import Comunity from './components/comunity/Comunity';
import Commy from './components/community1/Commy';
import Commu from './components/community2/Commu';
import Pay from './components/pay/Pay';
import Chartusers from './components/charts/Chartusers';
import ChartDb from './components/charts/ChartDb';
import Messg from './components/dashboard/Messg';

function App() {
  const [ping,setPing]=useState(false)

  return (
    <div className="App">
        {/* <Header ping={ping}/> */}
        <Navvbare ping={ping}/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/Comunity" element={<Comunity />} />
        <Route path="/Commy" element={<Commy />} />
        <Route path="/Commuu" element={<Commu />} />
        <Route path="/chausers" element={<Chartusers />} />
        <Route path="/chardb" element={<ChartDb/>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/produit" element={<Crproduit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Callus />} />
        <Route path="/edtprod" element={<ClientProfile />} />
        <Route path="/dev/:id" element={<Details />} />
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/messdb" element={<Messg />} />



        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
   
    </div>
  );
}

export default App;
