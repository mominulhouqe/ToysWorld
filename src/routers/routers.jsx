import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
       errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
        ]
    }
])
export default router;