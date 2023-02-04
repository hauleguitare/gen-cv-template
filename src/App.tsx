import React from 'react';
import {IAttributeComponent} from "./types/attributes-component";
import {ulid} from "ulid";
import renderComponentHandler from "./component-handler";

const data: IAttributeComponent[] = [
  {
    _uid: ulid(),
    component: 'Container',
    props: {
      className: 'py-4 px-4',
    },
    children: [
      {
        _uid: ulid(),
        component: 'div',
        children: 'Hello world',
        props: {
        }
      }
    ]
  }
]


function App() {
  return (
    <div>
      {data.map((component) => renderComponentHandler(component))}
    </div>
  );
}

export default App;
