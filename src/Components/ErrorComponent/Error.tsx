import React from 'react';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded' 
const Error = () => {
    return (
        <div className=' flex justify-center items-center bg-lime-100 h-full'>
 <ErrorOutlineRoundedIcon className=' animate-pulse mb-4' style={{width:'44px',height:'44px', color:'crimson'}}/>
          <p>Произошла ошибка, попробуйте еще раз</p>   
        </div>
    )
};

export default Error;