import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


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

            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;