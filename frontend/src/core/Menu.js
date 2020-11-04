import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";
import { loadCart } from "./helpler/cartHelper";



const Menu = ({ history, path }) => {
  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return "active";
    }
  };
 
  const getAmount = () => {
    let amount = 0;
    loadCart().map((p) => {
      amount = amount + parseInt(p.price);
    });
    return amount;
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <Link to="/">
              <img src="img/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li className={currentTab(history, "/")}>
                <Link to="/">Home</Link>
              </li>

              {isAuthenticated() && (
                <li className={currentTab(history, "/user/dashboard")}>
                  <Link to="/user/dashboard">dashboard</Link>
                </li>
              )}
              {/* <li className={currentTab}>
                <Link to="/#">Pages</Link>
                <ul className="header__menu__dropdown">
                  <li>
                    <Link to="./shop-details.html">Shop Details</Link>
                  </li>
                  <li>
                    <Link to="./shoping-cart.html">Shoping Cart</Link>
                  </li>
                  <li>
                    <Link to="./checkout.html">Check Out</Link>
                  </li>
                  <li>
                    <Link to="./blog-details.html">Dashboard</Link>
                  </li>
                </ul>
              </li> */}

              {!isAuthenticated() && (
                <Fragment>
                  <li className={currentTab(history, "/signup")}>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li className={currentTab(history, "/signin")}>
                    <Link to="/signin">Sign in </Link>
                  </li>
                </Fragment>
              )}
              {isAuthenticated() && (
                <li className={currentTab(history, "/signout")}>
                  <a
                    onClick={() => {
                      signout(() => {
                        history.push("/signin");
                      });
                    }}
                  >
                    Sign out
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <Link to="/#">
                  <i className="fa fa-heart"></i> <span>1</span>
                </Link>
              </li>
              <li className={currentTab(history, "/cart")}>
                <Link to="/cart">
                  <i className="fa fa-shopping-bag"></i>{" "}
                  <span>{loadCart().length}</span>
                </Link>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span>${getAmount() }</span>
            </div>
          </div>
        </div>
      </div>
      <div className="humberger__open">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
};

export default withRouter(Menu);
