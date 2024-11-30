import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import LowerHeader from "./LowerHeader";
import classes from "./header.module.css";

function Header() {
  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            <select name="search" id="search">
              <option value="all">All</option>
            </select>
            <input type="text" placeholder="Search product" />
            <BsSearch aria-label="Search" />
          </div>

          <div className={classes.order__container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/532/212/original/vector-united-states-of-america-flag-usa-flag-america-flag-background.jpg"
                alt="United States flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>

            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders">
              <p>Return</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <BiCart aria-label="Cart" size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
