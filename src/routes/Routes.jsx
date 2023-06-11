import {
    createBrowserRouter,
  } from "react-router-dom";
 
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Courses from "../pages/Courses/Courses";
import MyCourses from "../pages/Dashboard/MyCourses/MyCourses";
import AddItem from "../pages/Dashboard/AddCourse/AddCourse";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/UserHome.jsx/UserHome";
import UserHome from "../pages/Dashboard/UserHome.jsx/UserHome";
import CourseDetails from "../pages/Courses/CourseDetails";

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
          path: 'addCourse',
          element: <AddItem></AddItem>
        },
        {
          path: 'courseDetails/:id',
          element: <CourseDetails></CourseDetails>
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
          path:'adminhome',
          element: <AdminHome></AdminHome>
        },

      ]
    }
  ]);