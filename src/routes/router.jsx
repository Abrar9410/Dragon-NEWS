import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../components/CategoryNews";
import CareerLayout from "../layouts/CareerLayout";
import AboutLayout from "../layouts/AboutLayout";
import Login from "../layouts/Login";
import Register from "../layouts/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/01"></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/career",
        element: <CareerLayout></CareerLayout>
    },
    {
        path: "/about",
        element: <AboutLayout></AboutLayout>
    },
    {
        path: "/news",
        element: <h1>News Layout</h1>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    },
])

export default router;