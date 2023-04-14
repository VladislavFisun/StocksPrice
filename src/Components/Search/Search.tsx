import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Loading from '../Loading/Loading';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useQuery } from 'react-query';
import { InputAdornment } from '@mui/material';
import { getApiData } from '../../Api/stocksApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { apiItem } from '../../types/types';
import { observer } from 'mobx-react-lite';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Error from '../ErrorComponent/Error';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StockStore from '../../store/ApiStore'
import { NavLink } from 'react-router-dom';



const Search =observer(() => {
  
    const [api,setApi] = React.useState<apiItem[]>([])
    const [value,setValue] = React.useState<string>('')
    const [focus,setFocus] = React.useState(false)
    const [symbol,setSymbol] = React.useState<any>('')
   
    


    const {data,isError,isLoading}:any = useQuery("coins",getApiData,{
        keepPreviousData:true
    })
 


    useEffect(()=>{
       StockStore.updateStockFolder(api)
    },[api])
    

    React.useEffect(()=>{
    if(!data){
      return
    }
      let filteredArr =data.filter((item:apiItem)=>item.description.toLowerCase().includes(value!.toLowerCase()))    
      setApi(filteredArr.slice(0,9))
    
    },[data,value])

    const toggleFavorit=(arg:apiItem)=>{  
      const storage:any = localStorage.getItem('favorit')
      let filtered = StockStore.stockFavoriteFolder?.find((elem:apiItem)=>elem.symbol===arg.symbol)
      if(filtered){
      return
      }
      if(storage){
        localStorage.setItem('favorit',JSON.stringify(([...JSON.parse(storage),arg])))
      }
      else{
        localStorage.setItem('favorit',JSON.stringify([arg]))
      }  
      
      StockStore.toggleFavoriteToFolder(arg)
    }


   



if(isError){
  StockStore.toggleError(isError)
  return(<Error/>)
}

if(isLoading){
  StockStore.toggleLoading(isLoading)
    return <Loading/>
}


    return (
        <div 
      
        className='bg-lime-100 h-full w-full rounded-md'>
        <Typography variant='h4' className=' text-center font-mono p-6' >Stocks</Typography>
 <div className=' text-center'>
         <div className='flex items-center justify-center gap-2'>
              <TextField
              
              onFocus={()=>{setFocus(true)}}
               autoComplete='none'
             value={value}
             onChange={(e)=>{setValue(e.target.value)}}
           label="search for stocks"
           variant='standard'
           color='warning'
           InputProps={{
               endAdornment: (
                 <InputAdornment position="end" className=' cursor-pointer'>
                   <NavLink 
                    style={
                       {
                        pointerEvents:symbol===''?'none':'auto'
                       }
                    }
                   to={`/stock/:${symbol}`}><SearchIcon /></NavLink>
                 </InputAdornment>
               ),
             }}
           
         />
         <BackspaceIcon
         className='cursor-pointer '
         onClick={()=>{setValue('')}}
         />
         </div>
 </div>
{focus&&<div 

className='flex justify-center '>
  {api.length!==0? <ul className='p-4 rounded-xl mt-8 bg-zinc-100 "border-solid  border-4 border-black'>
    <CloseOutlinedIcon 
    
    onClick={()=>{setFocus(false)}}
    />
    {focus&&StockStore.stockFolder.map((item:apiItem)=>{
      let favoriteItem=StockStore.stockFavoriteFolder.find((stroke:apiItem)=>stroke.description===item.description)
      return(
        <li 
       style={{display:'flex',gap:'10px'}}
        className={favoriteItem
      ?
      'cursor-pointer text-amber-400'
      :
      'cursor-pointer'
      }
    
        key={item.figi}>
          <div    
           onClick={()=>{setValue(item.description) 
            setSymbol(item.symbol)
        }}>{item.description}</div>
          <div><StarBorderOutlinedIcon
          
          onClick={()=>{toggleFavorit(item)}
          
          }/></div>

        </li>  
      )
    })}
   </ul>:<Typography variant="h5" className='pt-4 font-semibold animate-pulse' component="h2">nothing found...</Typography>}
</div>}
  </div>
    );
})

export default Search;