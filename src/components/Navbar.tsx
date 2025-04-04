import { Link, NavLink } from "react-router-dom";

interface IProps {}

const Navbar = ({}: IProps) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>|<NavLink to="/about">About</NavLink>|
      <NavLink to="/learn">learn</NavLink>|<NavLink to="/contribute">Contribute</NavLink>|
      <NavLink to="/login">Login</NavLink>|
    </nav>
  );
};

export default Navbar;
