import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/learn" end>
            Quick Start
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn/installation">installation</NavLink>
        </li>
        <li>
          <NavLink to="/learn/thitd">third</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
