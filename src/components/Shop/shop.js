import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../Product/Product';


const Shop = () => {
    const first10=fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);

    const [cart,setCart] = useState([]);
 
    const handelAddProduct =(product) =>{
        console.log("Cliceked",product);
        const newCart=[...cart,product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">

          <div className="product-container">

                {
                    products.map(pd => <Product
                        handelAddProduct={handelAddProduct}
                        product={pd}></Product>)
                }

             </div>
           <div className="cart-container">


         <div className="Orders-summary">  
         <h3>Oredres Summary</h3>
         <h4>Item orders :{cart.length}</h4>
         </div>

          <div>
              <p>Items                 :${cart.length}</p>
              <p>Shipping & Handlening :${cart.price}</p>
              <p>Total Before Tax      :$</p>
              <p>Estimated Tax         :$</p>
              <h3>Orders Total         :$</h3>
          </div>
          <button className="btn1">Review Your order</button>
           </div>
        </div>
    );
};

export default Shop;