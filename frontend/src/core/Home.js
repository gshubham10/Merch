import React, { useState, useEffect } from "react";
import { getProducts } from "./helpler/coreapicalls";
import Base from "./Base";
import "../styles.css";
import Card from "./Card";
import Category from "./Category";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <Base title="Home Page" description="welcome to our store">
      <section className="hero">
        <div className="container">
          <div className="row">
            <Category />{" "}
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
              {/* <div className="hero__item set-bg" data-setbg="img/hero/banner.jpg">
                <div className="hero__text">
                  <span>FRUIT FRESH</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="#" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>  

      <section className="featured spad">
        <div className="container">
        <h1>Featured products</h1>
          <div className="row featured__filter">
            {products.map((product, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                  key={index}
                >
                  <Card product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Base>
  );
};
export default Home;
