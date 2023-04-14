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
import { CandlesType } from '../types/types';
import Loading from '../Components/Loading/Loading';
import Error from '../Components/ErrorComponent/Error';
const SingleItemPage = () => {

   const {name} = useParams() 
const symbol = name?.slice(1)
   console.log(symbol)
   const [data,setData] = React.useState<any>([])
   const [quota,setQuota]=React.useState<any>([])
   const [chars,setChars]=React.useState<any>([])
   const[error,setError] = React.useState<boolean>(false)
   const[loading,setLoading] = React.useState<boolean>(false)
   

   React.useEffect(()=>{
       axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cgsss9pr01qkisfipa00cgsss9pr01qkisfipa0g`)
       .then(({data})=>setData(data))
       
   },[])
   React.useEffect(()=>{
       axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgst5spr01qkisfipemgcgst5spr01qkisfipen0`)
       .then(({data})=>setQuota(data))
       
   },[])

React.useEffect(()=>{
  setLoading(true)
  setError(false)
axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=1675209600&to=1680307199&token=cgst5spr01qkisfipemgcgst5spr01qkisfipen0`)
.then(({data})=>{
  setChars(data)
  setLoading(false)  
  setError(false)
})
.catch(err=>{
  alert(err)
  setError(true)
})
},[])

const getEvery50=(arr:[])=>{
let newArr:any[] =[]
for(let i=0;i<=arr.length;i+=10){
  if(i%35===0){
   newArr.push(arr[i])
  }
}
return newArr
}

const cInfo = chars.c? getEvery50(chars.c):[]
const hInfo = chars.h?getEvery50(chars.h):[]
const lInfo = chars.l?getEvery50(chars.l).slice(0,50):[]
const TInfo = chars.t?getEvery50(chars.t).map((item:number)=>{
  
const date=(new Date(item*1000))
  return(
    `${date?.getDate()}.${date?.getMonth()}`
  )

})
  
  :[]

console.log(TInfo)


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

           <div className=' flex justify-center flex-col text-center items-center'>
               <Typography variant='h5' component='h3' className=' text-center'>Stock chart</Typography>
            {loading?<Loading/>:error?<Error/>: <div className='flex justify-center   w-4/5 bg-slate-400'>


              </div>}
                 
            </div>
        </div>

         </Container>
    );
};

export default SingleItemPage;