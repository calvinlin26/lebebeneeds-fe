//General Routes
import LoginPage from "@/features/authentication/containers/login";
import HomePage from "@/features/authentication/containers/home-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/",
        element: <LoginPage />
    }
])