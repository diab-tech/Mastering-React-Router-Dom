import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

interface IProps {}

const Layout = ({}: IProps) => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
