import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/contactus',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/about',
          element:<About></About>
        },
      ]
    },
  ]);