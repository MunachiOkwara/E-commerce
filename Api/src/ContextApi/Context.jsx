 import { createContext,  useState,useReducer, useEffect} from "react";
 export const ThemeContext = createContext();

 let initialCart= JSON.parse(localStorage.getItem("cart")) ||[];

 const reducer =(cart, action)=>{
  switch (action.type) {
    case 'added': {
      const check = cart.findIndex((e)=> e.id === action.id)
      if(check === -1){
        return [
          ...cart,
          {
            id: action.id,
            title: action.title,
            image: action.image,
            price: action.price,
            quantity: 1
          },
        ];
      }else{
        return cart.map((e)=>{
          if(e.id === action.id){
            e.quantity+=1
            return e
          }else{
            return e
          }
        })
      }
    }
    case 'increase': {
      return cart.map((e)=> {
        if(e.id === action.id){
          e.quantity+=1
          return e
        }else{
          return e
        }
      })
    }
    case 'reduce': {
      if(action.quantity === 1){
        const newArray = cart.filter((t) => t.id !== action.id);
        return newArray
      }else{
        return cart.map((e)=> {
          if(e.id === action.id){
            e.quantity-=1
            return e
          }else{
            return e
          }
        })
      }
        
    }
    case 'delete': {
      const newArray = cart.filter((t) => t.id !== action.id);
      return newArray
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

 export const ThemeProvider= ({children})=>{
   const [state, setState] = useState(false);
   const [cart, dispatch] = useReducer(reducer, initialCart);
   const [total, setTotal] = useState(0);
   const [showMenu, setShowmenu] = useState(false);

   useEffect(()=>{
    const val = (cart.reduce((p, e)=>(p + (e.price * e.quantity)),0)).toFixed(2)
    setTotal(val)
    localStorage.setItem("cart", JSON.stringify(cart))
   }, [cart])
   

  const Toggle=()=>{
    setState(!state);
  }

  const toggleMenu=()=>{
    setShowmenu(!showMenu);
  }

 return(
    <ThemeContext.Provider value={{state, Toggle, cart ,dispatch, total, showMenu, toggleMenu}}>
        {children}
    </ThemeContext.Provider>
 )

  
}