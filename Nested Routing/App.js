import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


import Home3 from './nested_routing/Home3';
import Courses from './nested_routing/Courses';
import Search from './nested_routing/Search';
import List1 from './nested_routing/List1';



function App() {
 
  return (
    <div>
   
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
