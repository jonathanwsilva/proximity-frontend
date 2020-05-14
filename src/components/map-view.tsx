import React, { useEffect } from 'react';

type Props = {
    children: JSX.Element;
}

export default ({ children }: Props) => {

    useEffect(()=>{
        console.log("mounted!")
        return ()=>{console.log("Unmounted!")}
    })
    return (
        <div>
            {children}
        </div>
    )
}

// Try really hard not to get this map to ever unmount from the DOM
// because I want to stay in the mapbox free tier