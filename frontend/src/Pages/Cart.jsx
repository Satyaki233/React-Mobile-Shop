import React,{useContext , useState} from 'react'
import {ProductContext} from '../App'
import './Css/cart.css'


const Cart = () => {
    const product = useContext(ProductContext); 
    console.log(product.productState)
    return (
        <div className='cart-page container'>
            <div className="cart-items">

           {product.productState.map(item =>
            <div className="item" key={Math.random()}>
                
                   <div className="col"><img src={`https://robohash.org/${item.id}`} class="card-img-top"/></div>
               <div className="col">
                    <div className="row"><h4>{item.name}</h4></div>
                    <div className="row"><p>RAM : {item.ram}</p></div>
                    <div className="row"><p>CPU : {item.cpu}</p></div>
               </div>
               <div className="row">
                   <button className="col btn btn-secondary num-btn">+</button>
                   <div className="col">{item.Number}</div>
                   <button className="col btn btn-secondary num-btn">-</button>
               </div>
               <div className="col text-center">{item.price}</div>
               <div className="col">
                   <button className="btn btn-danger" 
                   onClick={()=>{product.productDispatch({type:'removeProduct', value :item.name})}}>
                       Delete
                    </button>
                </div>
                
            </div>
            )}
            </div>
            <div className="form">ok</div>
        </div>
    )
}

export default Cart
