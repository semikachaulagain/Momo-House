import {Route,Routes} from "react-router-dom"
 import Home from "./Pages/Home"
import AllergyAdviced from "./Pages/AllergyAdviced"
import Navigation from "./Navbar/Navigation"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Menu from "./Pages/Menu"
import Service from "./Pages/Service"
 
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
       <Route path="/Service" element={<Service/>}/>
       <Route path="/AllergyAdviced" element={<AllergyAdviced/>}/>
       </Routes>
     </div>
   )
 }
 
 export default App
 