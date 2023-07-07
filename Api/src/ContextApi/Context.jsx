 import { createContext,  useState,useReducer} from "react";
 export const ThemeContext = createContext();

 let initalCart= [];

 const reducer =(tasks, action)=>{
 if ( action.type === 'Added'){
      return[
        ...tasks, 
        {
          id: action.id,
          name: action.name,
          price: action.price,
          image: action.image
        },
      ]


  
 }
 }

 export const ThemeProvider= ({children})=>{
   const [state, setState] = useState(false);
   const [tasks, dispatch] = useReducer(reducer,initalCart);
   

   

  const Toggle=()=>{
    setState(!state);
  }

 return(
    <ThemeContext.Provider value={{state, Toggle, tasks,dispatch}}>
        {children}
    </ThemeContext.Provider>
 )

  
}