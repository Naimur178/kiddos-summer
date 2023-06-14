import {
    createBrowserRouter,
  } from "react-router-dom";
 
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import MyCourses from "../pages/Dashboard/MyCourses/MyCourses";

import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/UserHome.jsx/UserHome";


import MyCart from "../pages/Dashboard/MyCarts/MyCart";
import AddCourse from "../pages/Dashboard/AddCourse/AddCourse";
import InstructorRoute from "./instructorRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoutes";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import Instructors from "../pages/Instructors/Instructors";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import Payment from "../pages/Dashboard/Payment/Payment";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        }
        
        
        
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'mycourses',
          element: <PrivateRoute><MyCourses></MyCourses></PrivateRoute>

        },
        {
          path: 'addReview',
          element: <AddReview></AddReview>

        },
       
        {
          path:'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        //instructor routes
        {
          path: 'addCourse',
          element: <InstructorRoute><AddCourse></AddCourse></InstructorRoute>
        },
        {
          path: 'instructorClasses',
          element: <InstructorRoute><InstructorClass></InstructorClass></InstructorRoute>
        },

        //admin routes
        {
          path:'users',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'manageClasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        }

      ]
    }
  ]);