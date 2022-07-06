/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom";
import "./../css/product.css";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase"
import tyre from './../img/tyre2.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetail = () => {
  const id = useParams();
  const [data, setdetail] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    loaddetail();
  }, []);

  var tempid = id.id;
  const loaddetail = async () => {
    const deleteRef = doc(db, "Tyres", tempid.toString());

    const docSnap = await getDoc(deleteRef)
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setdetail(docSnap.data());
      setImages(docSnap.data().image)
    } else {

      console.log("No such document!");
    }

  }
  return (
    <>

      <div className="container2">
        <div className="cards">
          <div className="images">

            {images && images.length ? (
              <Carousel
                autoPlay
                infiniteLoop
                showArrows={false}
                showStatus={false}
                className="prod_img"
              >
                {images &&
                  images.map((i) => (
                    <img
                      src={i.url}
                      key={i.public_id}
                      alt="cara img"
                      style={{ maxWidth: "50%" }}
                    />
                  ))}
              </Carousel>
            ) : (
              <img src={tyre} className="prod_img" alt="" />
            )}
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
          <div className="product">
            <p><b>Brand</b> : {data.brand}</p>
            <h1 className="prod_sub">Pattern : {data.pattern}</h1>
            <h2 className="prod_head">Available : {data.available}</h2>
            <p className="desc">{data.description}</p>
            {/* <br/> */}
            <div className="tab">  
          <table className="tablemain">
      <thead>
        <tr>
          <th className="firsttab">CODE</th>
          <th>STOCK</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CES-9000</td>
          <td>50mt</td>

        </tr>
           <tr>
          <td>CES-9000</td>
          <td>50mt</td>
          </tr>

        
      </tbody>
    </table>
    </div>
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
