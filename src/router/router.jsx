import { NavLink, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Details from "../Pages/Home/Details";
import ErrorPage from "../Layout/ErrorPage";
import { ToastContainer } from "react-bootstrap";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path:'/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                // loader: ({params})=> fetch(`https://nazmul-kitchen-server-nazmulhasan032.vercel.app//details/${params.id}`),
                

            },
            {
                path: 'login',
                element:<Login></Login>,
            },
            {
                path:'signUp',
                element: <Signup></Signup>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
        ]
    },
   
])

export default router;