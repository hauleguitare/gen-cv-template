import React, {FunctionComponent} from "react";
import Container from "../components/container";

// Declare Component Her
const Components: {[key: string] : FunctionComponent<any>} = {
    Container: Container
}


export default function getComponent(key: string): React.FunctionComponent<any> | undefined{
    return Components[key];
}