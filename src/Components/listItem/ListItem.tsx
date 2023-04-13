
import React, { useEffect } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
import { getApiPrice } from '../../Api/stocksApi';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
type ListElementProps={
    symbol:string
}

const ListElement:React.FC<ListElementProps> = ({symbol}) => {
const [data,setData] = React.useState<any>([])
const [quota,setQuota]=React.useState<any>([])

// const getApiProfile:any=async(arg:string)=>{
//     const response = await axios.get("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cgs27spr01qkrsgj0t1gcgs27spr01qkrsgj0t20")
//     setData(response.data)
//     return await response.data
// }
useEffect(()=>{
    axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cgs27spr01qkrsgj0t1gcgs27spr01qkrsgj0t20`)
    .then(({data})=>setData(data))
    
},[])
useEffect(()=>{
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgs27spr01qkrsgj0t1gcgs27spr01qkrsgj0t20`)
    .then(({data})=>setQuota(data))
    
},[])

console.log(quota)

    return (
        <>
        {data.logo?<img src={data.logo} className='m-2' style={{width:'24px', height:'24px',borderRadius:'50%'}} alt="" />:<QuestionMarkIcon className='m-2'/>}
         <p className=' font-mono text-lg  font-semibold text-left'>{data.name?data.name:'name not found '}</p>   
         
        </>
    );
};

export default ListElement;