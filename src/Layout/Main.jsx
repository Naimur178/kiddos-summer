import { Outlet } from "react-router-dom";
// import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar/NavBar";

const Main = () => {
  
  return (
    <div className="lg:w-3/4 mx-auto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;
