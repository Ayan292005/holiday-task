
import Home from "../pages/user/home"
import UserRoot from "../pages/user/userRoot"
import Flowers from "../pages/user/flowers"
import Basket from "../pages/user/basket"
import Favorites from "../pages/user/favorites"
import Details from "../pages/user/details"
import AdminRoot from "../pages/admin/AdminRoot"
import AdminFlowers from "../pages/admin/flowers"
import Dashboard from "../pages/admin/dashboard"
import AdminDetails from "../pages/admin/details"

const Routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/flowers",
                element: <Flowers/>,
            },
            {
                path: "/basket",
                element: <Basket />,
            },
            {
                path: "/favorites",
                element: <Favorites />,
            },
            {
                path: "/flowers/:id",
                element: <Details />,
            }
        ]
    }
    ,
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path: "adminFlowers",
                element: <AdminFlowers/>,
            },
            {
                path: "dashboard",
                element: <Dashboard/>,
            },
            {
                path: "/admin/adminFlowers/:id",
                element: <AdminDetails />,
            }
        ]
    }
]
export default Routes