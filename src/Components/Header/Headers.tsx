import React from 'react';
import './Header.scss'
import { NavLink } from 'react-router-dom';

const Headers = () => {

 const Logo:string = require('../../SVG/StockLogo.svg').default   
    const socket = new WebSocket('wss://ws.finnhub.io?token=cgqp8t9r01qn6i39ks5gcgqp8t9r01qn6i39ks60');
     
    console.log(socket)
     
    return (
    <div>
            <div className ='w-full font-mono   p-5   flex justify-around items-center  rounded-md bg-lime-100  h-20'  >
            <div className='flex gap-2 mr-10  items-center p-3 hover:bg-slate-200 cursor-pointer  rounded-2xl transition duration-500 ease-in-out '>
                  <h1 className=' text-2xl cursor-pointer   Header_Title  font-mono font-semibold from-neutral-700 '>Trades - Last Price Updates  </h1>
                  <div className='Header_logo cursor-pointer'>  <img className=' h-9 w-9'  src={Logo} alt="" /></div>
            </div>
              <div className='header_navigation m-0 p-0   '>
                <NavLink to='/'><span className=" text-2xl font-mono font-semibold p-2 hover:bg-slate-200 cursor-pointer  rounded-2xl transition duration-500 ease-in-out ">Main</span> </NavLink>
                <NavLink to='/Favorite'><span className=" text-2xl font-mono font-semibold p-2 hover:bg-slate-200 cursor-pointer  rounded-2xl transition duration-500 ease-in-out ">Favorite</span> </NavLink>
                <NavLink to='/stock'><span className=" text-2xl font-mono font-semibold p-2 hover:bg-slate-200 cursor-pointer  rounded-2xl transition duration-500 ease-in-out  ">Stock</span></NavLink>
              </div>
            </div>
    </div>
    );
};

export default Headers;