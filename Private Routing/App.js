import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menubar from './private_routing/Menubar';
import Home4 from './private_routing/Home4';
import Protected from './private_routing/Protected';
import Dashboard from './private_routing/Dashboard';
import Product from './private_routing/Product';


function App() {
   const[isLogin,setisLogin]=useState(null)

   const login=()=>{
      setisLogin(true)
   }

   const logout=()=>{
      setisLogin(false)
   }
 
  return (
    <div>
     <BrowserRouter>
     <Menubar/>
         <Routes>
             <Route path='/' element={<Home4/>}/>

             <Route path='/dashboard'
                    element={<Protected isLogin={isLogin}> <Dashboard/> </Protected>}
                    />

            <Route path='/product' 
                   element={<Protected isLogin={isLogin}> <Product/> </Protected>} 
                   />
         </Routes>
     </BrowserRouter>

     {
      isLogin?
      (<button onClick={logout}>logout</button>):(<button onClick={login}>login</button>)
     }

    </div>
  );
}

export default App;
