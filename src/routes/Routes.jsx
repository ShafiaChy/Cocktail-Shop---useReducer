import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main";
import Home from "../components/Home/Home";
import TopRate from "../components/TopRate/TopRate";
import Cart from "../components/MyCart/Cart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'top', 
          element: <TopRate></TopRate>
        },
        {
            path: 'cart', 
            element: <Cart></Cart>
          },
        
      ]
    }
])