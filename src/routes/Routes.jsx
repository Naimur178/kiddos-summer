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
          path: 'mycourses',
          element: <MyCourses></MyCourses>

        },
        {
          path: 'addCourse',
          element: <AddItem></AddItem>
        }
      ]
    },
  ]);