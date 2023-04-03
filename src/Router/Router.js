import { createBrowserRouter } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />
    },
    {
        path: "/home",
        element: <Home />
    }
]);

export default router;