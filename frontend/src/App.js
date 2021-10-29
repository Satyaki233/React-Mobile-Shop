import React,{useReducer , useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import {Data} from './Data'

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

import Menu from './Components/Menu'


export const ProductContext = React.createContext()
const initState = []

const reducer = (state , action ) =>{
  switch(action.type){
    case 'addProduct':
      return [...state , action.value]
    case 'removeProduct':
      return state.filter(item => item.name !== action.value)  
    case 'reset':
      return initState
    default:
      return state  
  }
}



function App() {
  const [product , dispatch ] = useReducer(reducer , initState );
  
  const saveToLocal = (product) =>{
    if(product.length > 0){
      localStorage.setItem('cart',JSON.stringify(product));
    }
  }
  const checkLocal=() =>{
    var localData = [];
   localData =  localStorage.getItem('cart');
   if(localData){
     console.log(JSON.parse(localData));
     const prevData = JSON.parse(localData);
     prevData.map(item=>{
       dispatch({type:'addProduct', value : item });
     })
   }
  }

  useEffect(() => {
    checkLocal()
  },[])


  useEffect(()=>{
    console.log(product)
    console.log(product.length)
    saveToLocal(product)
  },[product])


  return (
    <Router>
      <ProductContext.Provider value={{
         productState : product , productDispatch : dispatch
      }}>

    <Menu/>
    <div >
       <h1>Mobile shop</h1>
       <Switch>
         <Route path="/" exact>
             <Home Data={Data}/>
           </Route>
         <Route path="/Cart" component={Cart} exact/>
         <Route path="/Checkout" component={Checkout} exact/>
       </Switch>
    </div>

        </ProductContext.Provider>
    </Router>
  );
}

export default App;
