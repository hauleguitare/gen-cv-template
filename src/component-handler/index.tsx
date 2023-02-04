import React from "react";
import getComponent from "./component";
import {IAttributeComponent} from "../types/attributes-component";

export default function renderComponentHandler(attributes: IAttributeComponent): any {
    // Check if lower-case will be render primitive html element, Be Careful
    if (attributes.component.charAt(0) === attributes.component.charAt(0).toLowerCase()){
        return React.createElement(attributes.component, {
                key: attributes._uid,
                ...attributes.props,
            },
            renderComponentChildren(attributes.children)
        )
    }

    const component = getComponent(attributes.component);
    if (typeof component !== 'undefined'){
        // Render custom Component
        return React.createElement(component,
            {
                key: attributes._uid,
                ...attributes.props
            },
            renderComponentChildren(attributes.children)
        )
    }
}


function renderComponentChildren(children:  IAttributeComponent[] | null | undefined | string) {
    if (children){
        if (Array.isArray(children)){
            return children.map((comp) => renderComponentHandler(comp))
        }

        if (typeof children === 'string'){
            return children
        }
    }


}