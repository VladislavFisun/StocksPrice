import React from 'react';

type ContainerProps={
    children:React.ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <div  style={{marginInline:'auto'}} className=' max-w-7xl p-2  bg-neutral-800 flex flex-col gap-2  h-screen' >
            {children}
        </div>
    );
};

export default Container;