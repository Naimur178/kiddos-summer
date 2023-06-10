import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut=() =>{
    logOut()
    .then(()=>{
        localStorage.removeItem('kids-access-token')
    })
    .catch(console.error())
}
    return (
        <div>
           <div className="navbar fixed z-10 w-3/4 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li>
        <Link>Courses</Link>
          
        </li>
        <li><Link>Item 3</Link></li>
      </ul>
    </div>
    <img className="h-14  L" src="https://i.ibb.co/Qc4DFX9/1686129966225-removebg-preview.png" alt="" />
  </div>
  {
    user ? <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to='/courses'>All Courses</Link></li>
      <li><Link to='/mycourses'>My courses</Link></li>
      
      <li><Link>About Us</Link></li>
    </ul>
  </div>
  :
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      
      <li><Link>All Courses</Link></li>
      <li><Link>About Us</Link></li>
    </ul>
  </div>
  }
  <div className="navbar-end ">
    {
     user? <div className="flex gap-2 items-center ">
      <p className="text-2xl bg-orange-400 p-3 rounded-3xl"><FaShoppingCart></FaShoppingCart></p>
      <img className="w-10 rounded-xl" src="" alt="image" />
      <button onClick={handleLogOut} className="btn btn-outline">Logout</button>
     </div>:
     <div>
      <Link to='/login' className="btn btn-outline">Login</Link>
     </div>
    }
  </div>
</div>
        </div>
    );
};

export default NavBar;