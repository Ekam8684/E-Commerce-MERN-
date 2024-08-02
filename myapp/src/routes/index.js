import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home'
import Login from '../pages/login'
import Cart from '../pages/cart'
import Signup from '../pages/signup'
import Forgotpassword from '../pages/forgotpassword'
import Order from '../pages/order'
import Profile from '../pages/profile'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "signup",
                element: <Signup />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "verify",
                element: <Forgotpassword />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "order",
                element: <Order />
            }
        ]
    }
])
export default router