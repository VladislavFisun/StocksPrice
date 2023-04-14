import React from 'react';
import Container from '../Components/Container/Container';
import Headers from '../Components/Header/Headers';
import Main from '../Components/Main/Main';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import axios from 'axios';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
const SingleItemPage = () => {

   const {name} = useParams() 
const symbol = name?.slice(1)
   console.log(symbol)
   const [data,setData] = React.useState<any>([])
   const [quota,setQuota]=React.useState<any>([])
   

   React.useEffect(()=>{
       axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cgsoeq1r01qkisfimdrgcgsoeq1r01qkisfimds0`)
       .then(({data})=>setData(data))
       
   },[])
   React.useEffect(()=>{
       axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgsoeq1r01qkisfimdrgcgsoeq1r01qkisfimds0`)
       .then(({data})=>setQuota(data))
       
   },[])

   const getChart:any=async()=>{
    let response = await axios.get("https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=1&from=1680369126&to= 1681319526&token=cgsoeq1r01qkisfimdrgcgsoeq1r01qkisfimds0")

    return  response.data
   }

   const char:any = useQuery('chart',getChart)

console.log(char.data.c.slice(0,30))



    return (
        <Container>
        <Headers/>
        <div className='bg-lime-100 h-full w-full overflow-auto  rounded-md'>
         <Typography  variant="h5" className='pt-6 font-semibold text-center ' component="h2">Information about {data.name} stocks</Typography>
       

           <div className='flex justify-between items-center p-12 '>

            <div className=' pt-12 self-start'>
              {data.logo?  <img src={data.logo} alt="" className=' h-36 w-36 rounded-full' />:<div>
                <QuestionMarkIcon/>
                <Typography variant='h5' component='h3' className=' animate-pulse'>Logo not found...</Typography>
                </div>}
                <ul className='p-3'>
        <li className=' font-mono text-base font-semibold p-4 text-left'><span className=' text-xl'>country</span>: {data.country?data.country:'not found'}</li>
      <li className=' font-mono text-base font-semibold p-4 text-left'><span className=' text-xl'>exchange</span>: {data.exchange?data.exchange:'not found'}</li>
        <li className=' font-mono text-base font-semibold p-4 text-left'><span className=' text-xl'>ticker</span>: {data.ticker?data.ticker:'not found'}</li>
        </ul>
            </div>
            <div>
                <ul className=' text-right'>
          
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className=' text-xl'>List of close prices for returned candles</span>: {quota.c?`${quota.c} $`:'not found'}</li>
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className='text-xl'>List of high prices for returned candles</span>: {quota.h?`${quota.h} $`:'not found'}</li>
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className='text-xl'>List of low prices for returned candles</span>: {quota.i?`${quota.i} $`:'not found'}</li>
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className='text-xl'>List of open prices for returned candles</span>: {quota.o?`${quota.o} $`:'not found'}</li>
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className='text-xl'>List of timestamp for returned candles</span>:{quota.t?quota.t :'not found'} </li>
                <li className=' font-mono text-base font-semibold p-4 text-left'><span className='text-xl'>weburl</span>: <NavLink to={data.weburl} className='hover:backdrop-opacity-70'>link</NavLink></li>
               
            </ul>
            </div>
           </div>

            <div className=' flex justify-center text-center items-center'>
               <Typography variant='h5' component='h3' className=' text-center'>Stock chart</Typography>
            </div>
        </div>

         </Container>
    );
};

export default SingleItemPage;