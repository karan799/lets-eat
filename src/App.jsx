import React from 'react';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Order ,{loader as orderLoader}from "./features/order/Order"
import CreateOrder,{action as createOrderAction} from "./features/order/CreateOrder"
import Error from "./ui/Error"

import Menu,{loader as menuLoader} from './features/menu/Menu';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,

    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/menu',
        element:<Menu/>,
        loader:menuLoader,
        errorElement:<Error/>,
      },
      {
        path:'/order/new',
        element:<CreateOrder/>,
        action:createOrderAction 
      },
      {
        path:'/Order/:orderId',
        element:<Order/>,
        loader:orderLoader,
        errorElement:<Error/>,
      },
      {
        path:'/cart',
        element:<Cart/>
      }

    ]
  }
  
])

export default function App() {
  return (
      <RouterProvider router={router}/>
  );
}
