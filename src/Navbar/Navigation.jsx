import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <NavLink to="/">Momos</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/Service">Service</NavLink>
      <NavLink to="/Menu">Menu</NavLink>
      <NavLink to="/AllergyAdviced">AllergyAdviced</NavLink>
    </div>
  )
}

export default Navigation
