import React from "react";
import "./css/service.css";
import tyre from "../Components/img/tyre_img.png";
const Service = () => {
  const data = [
    {
      id: 1,
      name: "Apollo Tyre",
      image: tyre,
      desc: "this is a description",
      pattern: "Cross",
    },
    {
      id: 2,
      name: "BridgeStone Tyre",
      image:
        "https://www.bridgestone.co.in/content/dam/bridgestone/consumer/bst/apac/In/ProductImages/Optmisedtyreimgs/Potenza/tyres-for-high-speed-vehicles.jpg/_jcr_content/renditions/cq5dam.thumbnail.319.319.png",
      desc: "this is a description",
      pattern: "Cross",
    },
    {
      id: 3,
      name: "CEAT Tyre",
      image:
        "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tcjG0pvjrZzqKKoYaNzx7eQ5AsZRPtuvMw&usqp=CAU",
      desc: "this is a description",
      pattern: "Cross",
    },
    {
      id: 4,
      name: "JK Tyre",
      image: "https://m.media-amazon.com/images/I/81TjxZOFB0L._SX425_.jpg",
      desc: "this is a description",
      pattern: "Cross",
    },
    {
      id: 5,
      name: "Ultramile Tyre",
      image: "https://trimg.cardekho.com/model/200x200/um-4x4-a-t-bull.jpg",
      desc: "this is a description",
      pattern: "Cross",
    },
    {
      id: 6,
      name: "Yokohama Tyre",
      image:
        "https://m.media-amazon.com/images/I/41gr5PWnGUL.jpg",
      desc: "this is a description",
      pattern: "Cross",
    },
  ];
  return (
    <>
      <h1 className="heading">Tyres</h1>
      <div class="container1">
        {data.map((item) => (
          <div class="card1">
            <div class="imgBx">
              <img src={item.image} alt="tyre" />
            </div>

            <div class="contentBx">
              <h2>{item.name}</h2>
              <a href={"/product-static/"+item.id}>View more</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Service;
