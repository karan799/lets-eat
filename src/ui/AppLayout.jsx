import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import {Outlet,useNavigation} from "react-router-dom"
import LoadingIcon from './LoadingIcon';

export default function AppLayout() {

    const navigation=useNavigation();
    const isLoading= navigation.state ==="Loading"
  return (
    <div className='layout'>
        {isLoading && <LoadingIcon/> }
      <Header/>

        <main>
            <Outlet/>
        </main>

      <CartOverview/>  
    </div>
  );
}
