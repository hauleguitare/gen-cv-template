import React from "react";

export interface IContainerProps{
    children?: React.ReactNode | React.ReactElement<any>,
    className?: string,
    title: string
}


export default function Container ({children, className, title}: IContainerProps){
    return (
        <div className={`grid container ${className}`}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

Container.defaultProps  = {
    className: ''
}

