import React from "react";
import { ReactDOM } from "react";

/*  Part of the react virtual DOM. Whenever this object is changed, React compares 
    the new one against the current object -> and renders ONLY the changed state
    properties.
*/

const element = <h1>hi</h1>;
console.log(element);
