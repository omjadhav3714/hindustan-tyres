/* eslint-disable jsx-a11y/alt-text */
import { doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";
import "./../css/product.css";
import React, { useEffect, useState } from "react";

import tyre from "../img/tyre_img.png";
import { db } from "../../firebase";

const ProductDetail = () => {
  const id = useParams();
  const [data, setdetail] = useState([]);
  useEffect(() => {
    loaddetail();
  }, []);

  var tempid=id.id;
  const loaddetail = async () => {
    const deleteRef = doc(db, "Tyres", tempid.toString()); 

 const docSnap= await getDoc(deleteRef)
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setdetail( docSnap.data());
} else {
  
  console.log("No such document!");
}

  }
  const img=data.image;
  return (
    <>
    
      <div className="container2">
          <div className="cards">
            <div className="images">
            
               {/* <img src={data.image[0].url} className="prod_img" />  */}

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
              <p>{data.brand}</p>
              <h1 className="prod_sub">{data.pattern}</h1>
              <h2 className="prod_head">{data.available}</h2>
              <p className="desc">{data.description}</p>
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
