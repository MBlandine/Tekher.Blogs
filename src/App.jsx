
import Home from './componets/Home'
import Shop from './componets/Shop'
import Blog from './componets/Blog'
import Contact from './componets/Contact'
import Vendors from './componets/Vendors'
import Login from './componets/Login'
import Registration from './componets/Registration'

import Sidebar from './AllDashboard/Sidebar'
import Dashboard from './AllDashboard/Dashboard'
import Card from './AllDashboard/Card'
import Orders from './AllDashboard/Orders'
import Products from './AllDashboard/Products'
import Customers from './AllDashboard/Customers'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Layout from './componets/Layout'
import DashboardLayout from './AllDashboard/DashboardLayout'

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
            <Route path='/Registration' element={<Registration/>}/>
            </Route>  
            <Route path='/' element={<DashboardLayout/>}>
            
              <Route path='/Card' index element={<Card/>}/>
              <Route path='/Orders' element={< Orders/>}/>
              <Route path='/Products' element={<Products/>}/>
              <Route path='Customers' element={< Customers/>}/>
              </Route>  
          </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App
