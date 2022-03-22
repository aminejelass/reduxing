import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//store globalized store
//action increment
const increment = () => {
  return { type: "INCREMENT" };
};
const decriment = ()=>{ 
  return {type : "DECREMENT"}
}
//reducer
const counter = (state = 0, action)=>{
   switch(action.type)
   {
     case "INCREMENT" : 
           return state+1 ;
     case "DECREMENT" : 
           return state-1 ; 
   }
}

let store = createStore(counter)
store.subscribe(()=>console.log(store.getState(),"hhhhhhhhhhhhhhhhhhhhhhhhhh"))
//dispatsh
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decriment())
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
