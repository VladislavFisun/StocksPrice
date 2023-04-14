
import React, { useEffect } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
import DeleteIcon from '@mui/icons-material/Delete';
import { getApiPrice } from '../../Api/stocksApi';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import StockStore from '../../store/ApiStore'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
type ListElementProps={
    symbol:string,
 
}

const ListElement:React.FC<ListElementProps> = observer(({symbol}) => {
const [data,setData] = React.useState<any>([])
const [quota,setQuota]=React.useState<any>([])


useEffect(()=>{
    axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=cgsarmhr01qkrsgj5rngcgsarmhr01qkrsgj5ro0`)
    .then(({data})=>setData(data))
    
},[])
useEffect(()=>{
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cgsarmhr01qkrsgj5rngcgsarmhr01qkrsgj5ro0`)
    .then(({data})=>setQuota(data))
    
},[])



    return (
        < >
        {data.logo?<img src={data.logo} className='m-2' style={{width:'24px', height:'24px',borderRadius:'50%'}} alt="" />:<QuestionMarkIcon className='m-2'/>}
         {/* <span className=' font-mono text-lg  font-semibold    m-2'><NavLink to={`/stock/:${symbol}`}>{data.name?data.name:'name not found '}</NavLink></span>    */}
         
        </>
    );
})

export default ListElement;