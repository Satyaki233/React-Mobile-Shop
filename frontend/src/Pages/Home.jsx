import React,{useContext , useState , useEffect} from 'react'
import '../App.css'
import {ProductContext} from '../App';

const Home = ({Data}) => {
  
    const product = useContext(ProductContext)
    const [productData , setproductdata] = useState([])
    const addToCart = (data) =>{
        setproductdata(data)
       
       
        product.productDispatch({type : 'addProduct' , value : data})
       
    }

    const checkCart=()=>{

      const cartItems = JSON.parse(localStorage.getItem('cart'));
      console.log(`the cart item is ->`);
      console.log(cartItems.length);
      const foundItem = cartItems.find(item => item.id == 1);
      console.log(foundItem);
      if(foundItem) {
        console.log(`the cart item exists`);
      }
    }

    console.log(productData)

    useEffect(() => {
    setproductdata(Data);
    //  checkCart();
    },[])

   
    

    


    return (
        <div className="container">
        <div className="grid-view">
            {Data.map(item => 
                <div class="card" style={{width: '18rem'}}>
                <img src={`https://robohash.org/${item.id}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">CPU:{item.cpu} , RAM:{item.ram} , Warenty:{item.Warenty}</p>
                  <button class="btn btn-primary" onClick={()=>{addToCart(Data[item.id - 1])}}>Add to Cart</button>
                  {/* <button class="btn btn-success">Go somewhere</button> */}

                </div>
              </div>
                )}
        </div>
    </div>
    )
}

export default Home
