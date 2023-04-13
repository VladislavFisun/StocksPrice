import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Loading from '../Loading/Loading';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useQuery } from 'react-query';
import { InputAdornment, ListItem } from '@mui/material';
import { getApiData } from '../../Api/stocksApi';
import DeleteIcon from '@mui/icons-material/Delete';
import { apiItem } from '../../types/types';
import { observer } from 'mobx-react-lite';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Error from '../ErrorComponent/Error';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StockStore from '../../store/ApiStore'
import { NavLink } from 'react-router-dom';
import ListElement from '../listItem/ListItem';



const Search =observer(() => {
  
    const [api,setApi] = React.useState<apiItem[]>([])
    const [value,setValue] = React.useState<string>('')
    const [focus,setFocus] = React.useState(false)
    const [symbol,setSymbol] = React.useState<string>('PGLDF')
   
    


    const {data,isError,isLoading}:any = useQuery("coins",getApiData,{
        keepPreviousData:true
    })
  
    const searchRef:any = React.useRef()

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

   
    

    

const onBlurHandler=(e:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>)=>{
setTimeout(()=>{ 
  if(searchRef?.current?.contains(e.target)){
    setFocus(false)
  }
},100)
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
        <div className='bg-lime-100 h-full w-full'
   
        >
        <Typography variant='h4' className=' text-center font-mono p-6' >Stocks</Typography>
 <div className=' text-center'>
         <div className='flex items-center justify-center gap-2'>
              <TextField
              ref={searchRef}
              onFocus={()=>{setFocus(true)}}
              // onBlur={onBlurHandler}
               autoComplete='none'
             value={value}
             onChange={(e)=>{setValue(e.target.value)}}
           label="search for stocks"
           variant='standard'
           color='warning'
           InputProps={{
               endAdornment: (
                 <InputAdornment position="end" className=' cursor-pointer'>
                   <NavLink to='/'><SearchIcon /></NavLink>
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
{focus&&<div className='flex justify-center '>
  {api.length!==0? <ul className='mt-7 p-4  rounded-lg bg-gray-100'>
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
      'cursor-pointer text-red-600'
      :
      'cursor-pointer'
      }
    
        key={item.figi}>
          <div    
           onClick={()=>{setValue(item.description) 
            setSymbol(item.symbol)
        }}>{item.description}</div>
          <div><StarBorderOutlinedIcon
          
          onClick={()=>{  StockStore.toggleFavoriteToFolder(item)}
          
          }/></div>

        </li>  
      )
    })}
   </ul>:<Loading/>}
</div>}
  </div>
    );
})

export default Search;