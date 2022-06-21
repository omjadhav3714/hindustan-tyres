import "../Components/css/product.css";
import React from 'react'
import tyre from "../Components/img/tyre_img.png";
import { useParams } from "react-router-dom";
const Static_Detail = () => {
const id=useParams();
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
    {console.log(id.id)}
    <div className="container2">
      
      {data.map((item)=>(        
       id.id==item.id ?
      (<div className="cards">
          <div className="images">

            
              <img src={item.image} className="prod_img1" alt="" />
  
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
            <p><b>Brand</b> : {item.name}</p>
            <h1 className="prod_sub">Pattern : {item.pattern}</h1>
            {/* <h2 className="prod_head">Available : {item.available}</h2> */}
            <p className="desc">{item.desc}</p>
            <div className="buttons">
              <button className="add">Add to Cart</button>
              <button className="like">
                <span>♥</span>
              </button>
            </div>
          </div>
        </div>
):<></>))}
      </div>

    </>
  )
}

export default Static_Detail