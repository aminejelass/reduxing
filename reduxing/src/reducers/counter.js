const counterReducer = (state = 0 , action)=>
{
   switch(action.type)
   {
       case "DECRIMENT":
           return state-1
       case "INCREMENT":
           return state+1
       default :
            return state
   }
}

export default counterReducer ;