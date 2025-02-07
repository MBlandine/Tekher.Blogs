
import Home from './componets/Home'
import Shop from './componets/Shop'
import Blog from './componets/Blog'
import Contact from './componets/Contact'
import Vendors from './componets/Vendors'
import Login from './componets/Login'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Layout from './componets/layout';

function App() {
 

  return (
    <>
     <BrowserRouter>
    
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path='/'  index element={<Home/>}/>
            <Route path='/Home'  element={<Home/>}/>
            <Route path='/Shop' element={<Shop/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='Vendors' element={<Vendors/>}/>
            <Route path='/Login' element={< Login/>}/>
            
            </Route>    
          </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App
