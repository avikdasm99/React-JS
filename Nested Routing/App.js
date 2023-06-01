import logo from './logo.svg';
import './App.css';

import Menu from './router1/Menu';
import P1 from './practice/P1';
import P3 from './practice/P3';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Params from './router1/Params';
import Location from './router1/Location';
import Map1 from './may1/Map1';
import Map3 from './may1/Map3';
import ToDoList from './homework/ToDoList';
import Apiex1 from './apiex/Apiex1';
import Apiex2 from './apiex/Apiex2';
import RadioG from './z1/RadioG';
import Radio2 from './z1/Radio2';
import Password from './z1/Password';
import ShowHide from './z1/ShowHide';
import ChangeButton from './z1/ChangeButton';
import WordCounter from './z1/WordCounter';
import MultipleSelect from './z1/MultipleSelect ';
import Apiex3 from './apiex/Apiex3';
import Apiex4 from './apiex/Apiex4';
import Apiex5 from './apiex/Apiex5';
import Apiex6 from './apiex/Apiex6';
import Apiex7 from './apiex/Apiex7';
import LocalStorage from './apiex/LocalStorage';


import Home1 from './redirect_concept/Home1';
import About1 from './redirect_concept/About1';
import Login1 from './redirect_concept/Login1';
import Paginate1 from './paginate/Paginate1';

// import Paginate2 from './hw_paginate/Paginate2';

import { Suspense,lazy } from 'react';
import Home3 from './nested_routing/Home3';
import Courses from './nested_routing/Courses';
import Search from './nested_routing/Search';
import List1 from './nested_routing/List1';

const  Paginate2=lazy(()=>import('./hw_paginate/Paginate2'));

function App() {
 
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
     
     <nav>
      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/courses'>Courses</Link>
     </nav>

         <Routes>
            <Route path='/' element={<Home3/>}/>
            <Route path='/courses' element={<Courses/>}>
               <Route path='search' element={<Search/>}/>
               <Route path='list' element={<List1/>}/>
            </Route>
         </Routes>
     
     </BrowserRouter>
     
      
    </div>
  );
}

export default App;
