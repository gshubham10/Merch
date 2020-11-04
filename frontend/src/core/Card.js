import React, { useState } from "react";
import ImageHelper from "./helpler/ImageHelper";
import { Link, Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helpler/cartHelper";
import { isAuthenticated } from "../auth/helper";
//My TODO : WISHLIST





const Card = ({ product,  removeFromCart = false, addtoCart = true, reload= undefined , 
  setReload = f => f,
//fuction(f){return f}
 }) => {

  const [redirect, setRedirect] = useState(false)

  const cardTitle = product ? product.name : "A photo of the product";
  const cardDescription = product ? product.description : "Default description";
  const cardPrice = product ? product.price : "Default price ";

  const addToCart = () => {
    if (isAuthenticated()) {
        addItemToCart(product, ()=>{setRedirect(true)})
      console.log("added to cart");
    } else {
      //TODO: add redirect to signin
      console.log("Login Please!");
    }
  };

  const getAredirect = (Redirect) => {
    if (Redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addtoCart && (
        <li>
          <Link to="/cart" onClick={addToCart}>
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </li>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
      return (
          removeFromCart && (<li>
            <a onClick={() => {
                removeItemFromCart(product.id)
                setReload(!reload)
                console.log("removed from cart")
            }}>
              <i className="fa fa-trash"></i>
            </a>
          </li>)
      )
  }



  return (
    <div className="featured__item">
      <div
        className="featured__item__pic set-bg"
        data-setbg=""
        style={{ backgroundImage: `url(${product.image})` }}
      >
      {getAredirect(redirect)}
        {/* TODO: ImageHelper.js or dirctly to display card  */}
        {/* <ImageHelper product={product} /> */}
        <ul className="featured__item__pic__hover">
          <li>
            <Link to="/">
              <i className="fa fa-heart"></i>
            </Link>
          </li>
          {showRemoveFromCart(removeFromCart)}
          {showAddToCart(addToCart)}
        </ul>
      </div>
      <div className="featured__item__text">
        <h6>
          <Link to="/">{cardTitle}</Link>
        </h6>
        <p> {cardDescription}</p>
        <h5>${cardPrice}</h5>   
      </div>
    </div>
  );
};

export default Card;
