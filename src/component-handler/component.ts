import {Header} from "../../../gen-dynamic-cv/src/components/layouts/Header";
import Container from "../../../gen-dynamic-cv/src/components/container";
import React, {FunctionComponent} from "react";

// Declare Component Her
const Components: {[key: string] : FunctionComponent<any>} = {
    Header: Header,
    Container: Container
}


export default function getComponent(key: string): React.FunctionComponent<any> | undefined{
    return Components[key];
}