import React, { useEffect } from 'react';
import {observer} from 'mobx-react-lite' 
import Container from '../Container/Container';
import Headers from '../Header/Headers';
import StockStore from '../../store/ApiStore'
import { apiItem } from '../../types/types';
import Error from '../ErrorComponent/Error';
import Loading from '../Loading/Loading';
import ListElement from '../listItem/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import { getApiData } from '../../Api/stocksApi';
import { useQuery } from 'react-query';
import axios from 'axios'
import { NavLink } from 'react-router-dom';



const FavoriteList = observer(() => {

  const DeleteFavorit=(arg:apiItem)=>{
    const storage:any = localStorage.getItem('favorit')
     const filteredStocks = JSON.parse(storage).filter((item:apiItem)=>item.symbol!==arg.symbol)
     localStorage.setItem('favorit',JSON.stringify(filteredStocks))
     StockStore.removeFavoriteFromFolder(arg.symbol)
  }

  useEffect(()=>{
    const storage:any =localStorage.getItem('favorit')
    StockStore.updateFavoritStockFolder(JSON.parse(storage))
  },[])

  

    return (
       
            <div className='bg-lime-100 rounded-md h-full w-full text-center overflow-auto'>
              <Typography variant="h4" className='pt-4 font-semibold' component="h2" >Favorite stocks</Typography>
            <div className='flex justify-center items-center flex-col p-8'>
{StockStore.stockFavoriteFolder.length>0?
<ul className='p-4 rounded-xl bg-zinc-100 "border-solid  border-4 border-black'>
{
      StockStore.stockFavoriteFolder.map((item:apiItem)=>{
        return(
          <li
        
          className='flex p-2 items-center  justify-between  '>
            {/* <ListElement symbol={item.symbol}/> */}
           <NavLink
             to={`/stock/:${item.symbol}`}><span className=' font-semibold text-lg pr-6'>{item.description}</span></NavLink>   
            <DeleteIcon onClick={()=>{DeleteFavorit(item)}}/>
          </li>
        )
      })
    }
</ul>
:
<Typography variant="h5" className='pt-4 font-semibold animate-pulse' component="h2">favorites not found...</Typography>
}
</div>
            </div>
        
    );
})

export default FavoriteList;



