import React from 'react';

type MainProps={
    children?: React.ReactNode
}

const Main:React.FC<MainProps> = ({children}) => {
    return (
        <div className =' shadow-2xl shadow-slate-900 w-full text-center font-mono flex  justify-center  p-3  rounded-md bg-lime-100  h-full'>
            {children}
        </div>
    );
};

export default Main;