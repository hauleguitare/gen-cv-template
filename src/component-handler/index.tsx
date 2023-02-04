import React from "react";
import {IAttributeComponent} from "../../../gen-dynamic-cv/src/types/attributes-component";
import getComponent from "./component";

export default function RenderComponentHandler(attributes: IAttributeComponent): any {
    const component = getComponent(attributes.component);
    if (typeof component !== 'undefined'){
        return React.createElement(component,
            {
                key: attributes._uid,
                ...attributes.props
            },
            attributes.children && attributes.children.map((c) => RenderComponentHandler(c))
        )
    }
}