import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>

            <p><small>Company : {seller}</small></p><br></br>

            <p>Price:${price}</p>
            <p><small>only {stock} left in stock-order soon</small></p>
            <button onClick={() =>props.handelAddProduct(props.product)}>
                <span> add to cart</span>
            </button>
            </div>
        </div>
    );
};

export default Product;