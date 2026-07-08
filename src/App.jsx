import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import './index.css'
import CustomerSignup from './customer/CustomerSignup'
import CustomerLogin from './customer/CustomerLogin'
import Feed from './customer/Feed'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import RestaurantSignup from './Restaurant/RestaurantSignup'
import RestaurantLogin from './Restaurant/RestaurantLogin'
import Cart from './pages/Cart'
import Favorites from './pages/Favorites'
import Orders from'./pages/Orders'
import RestaurantDashboard from './pages/RestaurantDashboard'
import Addfood from './Restaurant/Addfood'
import MyFoods from './Restaurant/MyFoods'
import RestaurantOrders from './Restaurant/RestaurantOrders'
import ProtectedRoute from './customer/ProtectedRoute'
import About from './pages/About'
import Help from './pages/Help'
import { OrdersProvider } from './pages/OrdersContext'
function App() {
 

  return (
   <OrdersProvider>

<>
    
     <ToastContainer position="top-right" autoClose={5000}
     hideProgressBar={false}
     newestOnTop={true}
     closeOnClick
     pauseOnHover
/>
    <Routes>
 
    <Route path ="/" element ={<Home/>}/>

    <Route path='/customersignup'
    element={<CustomerSignup/>}/>

    <Route path='/customerlogin'
    element={<CustomerLogin/>}/>
  <Route path='/feed'
  element={    <ProtectedRoute><Feed/></ProtectedRoute>}/>
<Route path='/restaurantsignup'
element={<RestaurantSignup/>}/>

    <Route path='/restaurantlogin'
    element={<RestaurantLogin/>}/>
    
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/favorites'
    element={<Favorites/>}/>
  
   <Route path='/Orders'
   element={<Orders/>}/>

<Route path='/restaurant/dashboard'
element={<RestaurantDashboard/>}/>


<Route path='/restaurant/add-food'
element ={<Addfood/>}/>

  <Route path='/restaurant/my-foods'
  element ={<MyFoods/>}/>  
  <Route path='/restaurant/orders'
  element ={<RestaurantOrders/>}/>
  <Route path='/about'
  element={<About/>}/> 
    
    <Route path='/help'
    element ={<Help/>}/>
    
    </Routes>
  
   

</>

  </OrdersProvider>


  )}
export default App
