import "../../service.css";
import tyre from "../../img/tyre_img.png";
import React, { useEffect, useState } from 'react';
import './allservice.css'
import { db } from "../../../firebase";
import { async } from "@firebase/util";
const Allservice = () => {
    var[data1, onclick1] = useState([]);
    var tempdata=[];
    const [tyre, settyre] = useState([]);
    useEffect(() => {
      loadAlltyre();
    }, []);
  
    const loadAlltyre = async () => {
      await db.collection('Tyres').get().then((querySnapshot) => {
  
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach(element => {
            var data1 = element.data();
            settyre(arr => [...arr, data1]);
            tempdata.push(data1); 
        });
        
        onclick1(tempdata.filter((e) =>e.brand == "Apollo"));
    })
    // data = tyre.filter((item) => item.brand.includes("Apollo"));
    
  
    };
    const onclick=(value)=> {
        // var value="Cars";
        onclick1( tyre.filter((item) => item.brand==value))
        console.log(data1);
      }
  return (
    <>
      <div className="button">
        <button onClick={() =>onclick("Apollo")} className="but">Apollo</button>
        <button onClick={() =>onclick("Bridgestone")} className="but">Bridgestone</button>
        <button onClick={() =>onclick("Ceat")} className="but">Ceat</button>
        <button onClick={() =>onclick("Jk tryes")} className="but">Jk tryes</button>
        <button onClick={() =>onclick("Ultramile")} className="but">Ultramile</button>
        <button onClick={() =>onclick("Yokohama")} className="but">Yokohama</button>
      </div>
      <h1 className="heading">Tyres</h1>
        {data1.map((item)=>(
      <div class="container1">
        <div class="card1">
          <div class="imgBx">
            <img src={item.image[0].url} alt="tyre" />
          </div>

          <div class="contentBx">
            <h2>{item.brand} Tyres</h2>

            <div class="size1">
              <h3>size1 :</h3>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
            <a href="/product-detail">View more</a>
          </div>
        </div>
      </div>
))}
    </>
  );
};

export default Allservice;
