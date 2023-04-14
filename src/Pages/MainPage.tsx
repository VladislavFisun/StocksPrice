import React from 'react';
import Headers from '../Components/Header/Headers';
import Main from '../Components/Main/Main';
import Container from '../Components/Container/Container';
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
import SkeletonItem from '../Components/Skeleton/skeleton';

const MainPage = () => {

    const [pages,setPages] = useState(9)

    const getNews=async()=>{
        const response =await axios.get("https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2022-09-01&to=2023-01-01&token=cgsarmhr01qkrsgj5rngcgsarmhr01qkrsgj5ro0")

        return await response.data
    }

let {data,isLoading,isError} = useQuery('news',getNews)

function scrollToTop(): void {
    parentRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  const parentRef:any = React.useRef()  
console.log(data)

    return (
        <Container>
   <Headers/>
   <Main>
<div
ref={parentRef}
className=' overflow-auto'>
   <Typography variant='h4' component='h2' className=' pr-3 ' > News <NewspaperIcon style={{height:'33px',width:'33px'}}/></Typography>
       <ul>
        {
    data?.slice(pages-9,pages).map((item:any)=>{
        return(
            <li className='flex flex-col gap-4 p-5 items-center'>
                <h2  className=' font-mono font-semibold text-xl'>{item.headline}</h2>
                {item.image?<img src={item.image} className=' w-80  h-44 text-center' alt="" />:<SkeletonItem/>}
                <p className=' font-mono font-medium text-md'>{item.summary} <NavLink to={item.url}><span className=' font-mono font-semibold'>source</span>...</NavLink></p>
    
    
            </li>
        )
    })
        }
       </ul>
       
       <ButtonGroup
       className='p-3'
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button
          disabled={pages===9?true:false}
          onClick={()=>{
            setPages(prev=>prev-9)
            scrollToTop()
          }}
          style={{backgroundColor:'darkgrey',borderColor:'white'}}>back</Button>
          <Button 
           onClick={()=>{
            setPages(prev=>prev+9)
            scrollToTop()
          }}
          style={{backgroundColor:'darkgrey',border:'black'}}>next</Button>
        </ButtonGroup>
</div>
   </Main>
    </Container>
    );
};

export default MainPage;