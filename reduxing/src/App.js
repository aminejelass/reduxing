
import {useSelector,useDispatch} from "react-redux"
import increment from "./actions/increment"
import decriment from "./actions/decrimrnt"
import  toggle  from "./actions/login"
function App() {
   const count = useSelector(state=>state.counter)
   const login = useSelector(state=>state.isLogged)
   console.log(login)
   const isloged =()=> login?  <img src = "https://bit.ly/3D5JCGf"/> :  <img src = "https://bit.ly/3wCQhXc"/>
   const dispatch = useDispatch()
   
  return (
    <div className="App" >
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decriment())}>-</button>
    <h1>counter {count}</h1>
    {isloged()}
    <button onClick={()=>dispatch(toggle())}> LOGIN/LOG OUT</button>
    </div>
  );
}

export default App;
