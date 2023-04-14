import React from 'react';
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

const FavoriteList = observer(() => {
// if(StockStore.Error){
//     return <Error/>
// }
// if(StockStore.Loading){
//     return <Loading/>
// }

const onDeleteFavorite=(item:apiItem)=>{
  if(window.confirm('do you really want to delete this?')){
    StockStore.removeFavoriteFromFolder(item)
  }
}

    return (
       
            <div className='bg-lime-100 h-full w-full text-center'>
              <Typography variant="h4" className='pt-4 font-semibold' component="h2" >Favorite stocks</Typography>
            <div className='flex justify-center items-center flex-col p-8'>
{StockStore.stockFavoriteFolder.length>0?<ul className='p-4 rounded-xl bg-zinc-100 "border-solid  border-4 border-black'>
    {
      StockStore.stockFavoriteFolder.map((item:apiItem)=>{
        return(
            <li className='flex p-2 items-center  justify-between  '>
              <ListElement  symbol={item.symbol}/>    
          <div>
              <DeleteIcon
              className='hover:cursor-pointer  '
              onClick={()=>{onDeleteFavorite(item)}}
              />  
          </div> 
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



