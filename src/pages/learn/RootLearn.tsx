import { Outlet } from "react-router-dom";
import AsideNav from "./AsideNav";
import Navbar from "../../components/Navbar";

interface IProps {}

const Learn = ({}: IProps) => {
  return (
    <>
      <Navbar />
      <AsideNav />
      <Outlet />
    </>
  );
};

export default Learn;
