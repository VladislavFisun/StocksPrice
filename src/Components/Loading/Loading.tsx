import React from 'react';
import AutorenewIcon from '@mui/icons-material/Autorenew';
const Loading = () => {
    return(
        <div className=' flex justify-center items-center text-center bg-lime-100 h-full'>
    <div>
        <AutorenewIcon className=' animate-spin mb-4' style={{width:'44px',height:'44px', color:'crimson'}}/>
        <p>Происходит загрузка...</p>
        </div>   
           </div> 
    )
};

export default Loading;