import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import Updated from "../pages/AddToys/updated/Updated";
import SingleData from "../pages/ToysDetails/SingleData/SingleData";

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
                path: "alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: 'singleData',
                element: <PrivateRoute><SingleData></SingleData> </PrivateRoute>
            },
            {
                path: "addtoys",
                element: <AddToys></AddToys>
            },
            {
                path: "addToys/:id",
                element: <Updated></Updated>,
                loader: ({ params }) => fetch(`https://toys-server-mu.vercel.app/addToys/${params.id}`)

            }
            ,
            
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
