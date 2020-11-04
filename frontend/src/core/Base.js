import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import Menu from "./Menu";
import { signout, isAuthenticated } from "../auth/helper";


const Base = ({
  title = " My Store",
  description = " My description",
  className= "",
  children,
  history,
  path
}) => {


  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return "active";
    }
  };

  return (
    <div>
      <title>{title}</title>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@ib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <Link to="/#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="/#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="/#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link to="/#">
                      <i className="fa fa-pinterest-p"></i>
                    </Link>
                  </div>
                  {!isAuthenticated() && (
                <Fragment>
                  <li className={`${currentTab(history, "/signup")} header__top__right__auth` }>
                    <Link to="/signup"> <i className="fa fa-user-plus"></i>Sign up</Link>
                  </li>
                {"  "}|  {"  "} 
                  <li className={`${currentTab(history, "/signin")} header__top__right__auth` }>
                    <Link to="/signin"> <i className="fa fa-user"></i>Sign in </Link>
                  </li>
                </Fragment>
              )}
              {isAuthenticated() && (
                <li className={  `${currentTab(history, "/signout")} header__top__right__auth`   }>
                  <a
                    onClick={() => {
                      signout(() => {history.push("/signin")});
                    }}
                  >
                 <i className="fa fa-sign-out"></i>
                    Sign out
                  </a>
                </li>
              )}
              
{/*                   
                  <div className="header__top__right__auth">
                    <Link to="/#">
                      <i className="fa fa-user"></i> Login
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menu/>
      </header>

      <div className={className}>{children}</div>

      <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                            <Link to="/"><img src="img/logo.png" alt=""/></Link>
                        </div>
                        <ul>
                            <li>Address: </li>
                            <li>Phone:</li>
                            <li>Email:</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Useful Links</h6>
                        <ul>
                            <li><Link to="/#">About Us</Link></li>
                            <li><Link to="/#">About Our Shop</Link></li>
                            <li><Link to="/#">Secure Shopping</Link></li>
                            <li><Link to="/#">Delivery infomation</Link></li>
                            <li><Link to="/#">Privacy Policy</Link></li>
                            <li><Link to="/#">Our Sitemap</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/#">Who We Are</Link></li>
                            <li><Link to="/#">Our Services</Link></li>
                            <li><Link to="/#">Projects</Link></li>
                            <li><Link to="/#">Contact</Link></li>
                            <li><Link to="/#">Innovation</Link></li>
                            <li><Link to="/#">Testimonials</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                        <h6>Join Our Newsletter Now</h6>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <form action="/#">
                            <input type="text" placeholder="Enter your mail"/>
                            <button type="submit" className="site-btn">Subscribe</button>
                        </form>
                        <div className="footer__widget__social">
                            <Link to="/#"><i className="fa fa-facebook"></i></Link>
                            <Link to="/#"><i className="fa fa-instagram"></i></Link>
                            <Link to="/#"><i className="fa fa-twitter"></i></Link>
                            <Link to="/#"><i className="fa fa-pinterest"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </footer>
    </div>
  );
};

export default withRouter(Base);
