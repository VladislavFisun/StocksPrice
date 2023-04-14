import React from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useQuery } from 'react-query';
import axios from 'axios';
import {useState,useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SkeletonItem from '../Skeleton/skeleton';


const DefaultNews = () => {
    return (
        <div>
             {/* <li className='flex flex-col gap-4 p-5 items-center'>
                <h2  className=' font-mono font-semibold text-xl'>{item.headline}</h2>
                {item.image?<img src={item.image} className=' w-80  h-44 text-center' alt="" />:<SkeletonItem/>}
                <p className=' font-mono font-medium text-md'>{item.summary} <NavLink to={item.url}><span className=' font-mono font-semibold'>source</span>...</NavLink></p>
    
    
            </li> */}
        </div>
    );
};

export default DefaultNews;