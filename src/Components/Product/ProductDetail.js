/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./../css/product.css";
import tyre from "../img/tyre_img.png";

const ProductDetail = () => {
  return (
    <>
      <div className="container2">
        <div className="cards">
          <div className="images">
            <img src={tyre} className="prod_img" />
            <p className="pick">choose size</p>
            <div className="sizes">
              <div className="size">5</div>
              <div className="size">6</div>
              <div className="size">7</div>
              <div className="size">8</div>
              <div className="size">9</div>
              <div className="size">10</div>
              <div className="size">11</div>
              <div className="size">12</div>
            </div>
          </div>
          {/* <div className="slideshow-buttons">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <div className="four"></div>
  </div> */}

          <div className="product">
            <p>Women's Running Shoe</p>
            <h1 className="prod_sub">Nike Epic React Flyknit</h1>
            <h2 className="prod_head">$150</h2>
            <p className="desc">
              The Nike Epic React Flyknit foam cushioning is responsive yet
              light-weight, durable yet soft. This creates a sensation that not
              only enhances the feeling of moving forward, but makes running
              feel fun, too.
            </p>
            <div className="buttons">
              <button className="add">Add to Cart</button>
              <button className="like">
                <span>♥</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
