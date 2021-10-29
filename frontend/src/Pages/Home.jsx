import React,{useContext , useState , useEffect} from 'react'
import '../App.css'
import {ProductContext} from '../App';

const Home = ({Data}) => {
  
    const product = useContext(ProductContext)
    const [productData , setproductdata] = useState([])
    const addToCart = (data) =>{
        
       
       
        product.productDispatch({type : 'addProduct' , value : {
          id:data.id,
          name: data.name,
          cpu : data.cpu,
          ram : data.ram,
          Warenty: data.Warenty,
          Number:data.Number + 1,
          price:data.price
        }})
       alert('added to cart')
       window.location.reload();
    }

    const checkCart=(id)=>{

      const cartItems = JSON.parse(localStorage.getItem('cart'));
      if(cartItems == null){       
          return <button className="btn btn-primary" onClick={()=>{addToCart(Data[id - 1])}}>Add to cart</button>
        }else{
        const foundItem = cartItems.find(item => item.id == id);
        console.log(foundItem);
        if(foundItem) {
          return <button className="btn btn-success">Go to Cart</button>
        }else{
          return <button className="btn btn-primary" onClick={()=>{addToCart(Data[id - 1])}}>Add to cart</button>
        }
      }     
    }

 
   

    useEffect(() => {
     console.log(product.productState)
    
    },[product.productState])

   
    

    


    return (
        <div className="container">
        <div className="grid-view">
            {Data.map(item => 
                <div class="card" style={{width: '18rem'}}>
                <img src={`https://robohash.org/${item.id}`} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">CPU:{item.cpu} , RAM:{item.ram} , Warenty:{item.Warenty}</p>
                  {checkCart(item.id)}
                  {/* <button class="btn btn-success">Go somewhere</button> */}

                </div>
              </div>
                )}
        </div>
       
    </div>
    )
}

export default Home
