// import { NavLink, Outlet } from "react-router-dom";
// import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';

// import useAdmin from "../hooks/useAdmin";
// import { useEffect } from "react";
// import useCart from "../hooks/useCart";

// const Dashboard = () => {
//     const [cart] = useCart();
//     useEffect(()=>
//     {
//         fetch("")
//     },[])

//     // TODO: load data from the server to have dynamic isAdmin based on Data
//     // const isAdmin = true;
//     const [isAdmin] = useAdmin();

//     return (
//         <div className="drawer drawer-mobile ">
//             <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//             <div className="drawer-content">
//                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
//                 <Outlet></Outlet>

//             </div>
//             <div className="drawer-side bg-[#D1A054]">
//                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//                 <ul className="menu p-4 w-80">

//                     {
//                         isAdmin ? <>
//                             <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
//                             <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
//                             {/* <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li> */}
//                             {/* <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li> */}
//                             {/* <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li> */}

//                         </> : <>
//                             <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
//                             {/* <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li> */}
//                             {/* <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li> */}
//                             {/* <li>
//                                 <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
//                                     <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
//                                 </NavLink>

//                             </li> */}
//                         </>
//                     }

//                     <div className="divider"></div>
//                     <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
//                     <li><NavLink to="/courses"> Our Courses</NavLink></li>
//                     {/* <li><NavLink to="/order/salad">Order Food</NavLink></li> */}
//                 </ul>

//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";


// import NavBar from "../shared/NavBar";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar/NavBar";


const Dashboard = () => {
  const [isAdmin, ] = useAdmin();
  const [isInstructor, ] = useInstructor();
  return (
    <div className="w-3/4 mx-auto">
      {/* <NavBar className=''></NavBar> */}
      <NavBar></NavBar>
      <div className="py-10"></div>
      
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gradient-to-r from-violet-500 to-pink-700">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {/* Sidebar content here */}
            {
              isAdmin?
              <>
              <NavLink to="/dashboard/users" activeClassName='active' className=''>Users</NavLink>
              <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
              </>
              :isInstructor?
              <>
              <NavLink to='/dashboard/instructorClasses'>My Classes</NavLink>
              <NavLink to="/dashboard/addCourse">Add A Course</NavLink>
              </>
              :
              <>
              <li>
              <NavLink to='/dashboard/mycourses' className=''>My Courses</NavLink>
            </li>
            <li>
              <NavLink className='' to='/dashboard/paymentHistory'>Payment History</NavLink>
            </li>
            <li>
              <NavLink to='/dashboard/mycart' className='' >Selected Courses</NavLink>
            </li>
            <li>
              <NavLink className='' to='/dashboard/addReview'>Add Review</NavLink>
            </li>
              </>
              
            }
            
            <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/courses"> All Courses</NavLink></li>
                    
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
