import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "details",
                element: <PrivateRoute>
                    <ToysDetails />
                </PrivateRoute>
            },
        ],
    },
]);

export default router;
