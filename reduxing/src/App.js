
import {useSelector} from "react-redux"

function App() {
   const count = useSelector(state=>state.counter)
   const login = useSelector(state=>state.isLogged)
   console.log(login)
   const isloged =()=> login?  <img src = "https://bit.ly/3D5JCGf"/> :  <img src = "https://bit.ly/3wCQhXc"/>
     
   
  return (
    <div className="App" >
    <h1>counter {count}</h1>
    {isloged()}
    </div>
  );
}

export default App;
