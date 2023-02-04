import React from "react";

interface DynamicProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any
}

export interface IAttributeComponent {
    _uid: string,
    component: string,
    children?: IAttributeComponent[] | null
    props?: DynamicProps,
}