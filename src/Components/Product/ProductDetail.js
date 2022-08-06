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

      <div className="container2" data-testid='productdetail'>
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
            <p className="pick">Contact Dealer</p>
            <div className="sizes">
              <a className="cDealer" href="tel:+91 80878 36800">Nikhil Gaikar</a>
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
                <tbody>
                  <tr>
                    <th>Load Index</th>
                    <td>{data.lIndex}</td>
                  </tr>

                  <tr>
                    <th>Maximum Load</th>
                    <td>{data.mLoad}</td>
                  </tr>

                  <tr>
                    <th>Tubeless</th>
                    <td>{data.tubeless}</td>
                  </tr>

                  <tr>
                    <th>Maximum Speed Limit</th>
                    <td>{data.mSpeedLimit}</td>
                  </tr>

                  <tr>
                    <th>Construction Type</th>
                    <td>{data.cType}</td>
                  </tr>

                  <tr>
                    <th>Tyre Weight</th>
                    <td>{data.tWeight}</td>
                  </tr>

                  <tr>
                    <th>Warranty Summary</th>
                    <td>{data.wSummary}</td>
                  </tr>

                  <tr>
                    <th>Speed Rating</th>
                    <td>{data.speedRating}</td>
                  </tr>

                  <tr>
                    <th>Category</th>
                    <td>{data.category}</td>
                  </tr>

                  <tr>
                    <th>Width</th>
                    <td>{data.width}</td>
                  </tr>

                  <tr>
                    <th>Size</th>
                    <td>{data.size}</td>
                  </tr>

                  <tr>
                    <th>Profile</th>
                    <td>{data.profile}</td>
                  </tr>

                  <tr>
                    <th>Vehicle Models</th>
                    <td>{data.vModels}</td>
                  </tr>

                  <tr>
                    <th>Rim</th>
                    <td>{data.rim}</td>
                  </tr>

                  <tr>
                    <th>Comfort</th>
                    <td>{data.comfort}</td>
                  </tr>

                  <tr>
                    <th>Grip</th>
                    <td>{data.grip}</td>
                  </tr>

                  <tr>
                    <th>Stability</th>
                    <td>{data.stability}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
