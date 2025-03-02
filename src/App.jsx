import {Route,Routes} from "react-router-dom"
 import Home from "./Pages/Home"
import AllergyAdviced from "./Pages/AllergyAdviced"
import Navigation from "./Navbar/Navigation"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Login from "./Aurth/Login"
import Menu from "./Pages/Menu"
import Service from "./Pages/Service"
import ProductDescription from "./Pages/ProductDescription"
import Success from "./PaymentSystem/Success"
import Failure from "./PaymentSystem/Failure"
import Payment from "./PaymentSystem/Payment"
import CartPage from "./Pages/CartPage"

 const App = () => {
   return (
     <div>
      <Navigation/>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Menu" element={<Menu/>}/>
       <Route path='/ProductDescription/:id' element={<ProductDescription/>}/>
       <Route path="/Service" element={<Service/>}/>
       <Route path="/AllergyAdviced" element={<AllergyAdviced/>}/>
       <Route path="/Success" element={<Success/>}/>
       <Route path="/Failure" element={<Failure/>}/>
       <Route path="/Payment" element={<Payment/>}/>
       <Route path="/CartPage" element={<CartPage/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App
 