import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/HeaderFooter/Header";

const Root = () => {
  const location = useLocation();
  location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
