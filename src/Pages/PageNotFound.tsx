import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
const PageNotFound = () => {
    return (
        <div className='  text-center flex  flex-col items-center justify-center ' style={{height:'100vh'}}>
            <ErrorOutlineRoundedIcon className=' animate-pulse mb-4' style={{width:'44px',height:'44px', color:'crimson'}}/> 
        <div className=' text-gray-900 font-mono'>Page not found... </div>
        <div className='m-2 '> <NavLink to='/'><span className='font-mono  text-xl text-gray-900 '>Go back</span> </NavLink></div>
        </div>
    );
};

export default PageNotFound;