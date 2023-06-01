import logo from './logo.svg';
import './App.css';



import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menubar from './private_routing/Menubar';
import Home4 from './private_routing/Home4';
import Protected from './private_routing/Protected';
import Dashboard from './private_routing/Dashboard';
import Product from './private_routing/Product';

// import Paginate2 from './hw_paginate/Paginate2';

// import { Suspense,lazy, useState } from 'react';
// import Home3 from './nested_routing/Home3';
// import Courses from './nested_routing/Courses';
// import Search from './nested_routing/Search';
// import List1 from './nested_routing/List1';

// const  Paginate2=lazy(()=>import('./hw_paginate/Paginate2'));

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

      {/* <BrowserRouter>
         <Routes>
            <Route path='/' element={<Menu></Menu>}/>
            <Route path='/test1' element={<><Menu/><P1/></>}/>
            <Route path='/test2' element={<><Menu/><P3/></>}/>
            <Route path='/test3/:userid' element={<><Menu/><Params/></>}/>
            <Route path='/test4' element={<><Menu/><Location/></>}/>
            <Route path='/test5' element={<><Menu/><Map1/></>}/>
            <Route path='/test6' element={<><Menu/><Map3/></>}/>
            <Route path='/hw' element={<><Menu/><ToDoList/></>}/>
         </Routes>
      </BrowserRouter> */}
     {/* <LocalStorage/> */}


     {/* <BrowserRouter>
         <Routes>
             <Route path="/"  element={<Home1/>}/>
             <Route path="/about" element={<About1/>}/>
             <Route path="/login" element={<Login1/>}/>
         </Routes>
     </BrowserRouter> */}
     {/* <Paginate1/> */}

     {/* <Paginate2/> */}
     {/* <Suspense fallback={<h1>Still loading</h1>}>
        <Paginate2/>
     </Suspense> */}
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
