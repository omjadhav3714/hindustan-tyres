/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import "../../service.css";
import React, { useEffect, useState } from 'react';
import './allservice.css'
import { db } from "../../../firebase";

const Allservice = () => {
  var [data1, onclick1] = useState([]);
  var tempdata = [];
  const [tyre, settyre] = useState([]);
  useEffect(() => {
    loadAlltyre();
  }, []);

  const loadAlltyre = async () => {
    await db.collection('Tyres').get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
        var data1 = element.data();
        settyre(arr => [...arr, data1]);
        tempdata.push(data1);
      });

      onclick1(tempdata.filter((e) => e.brand == "Apollo"));
    })
  };

  const onclick = (value) => {
    onclick1(tyre.filter((item) => item.brand == value))
    console.log(data1);
  }
  return (
    <>
      <div className="button">
        <button onClick={() => onclick("Apollo")} className="but">Apollo</button>
        <button onClick={() => onclick("BridgeStone")} className="but">Bridgestone</button>
        <button onClick={() => onclick("CEAT")} className="but">Ceat</button>
        <button onClick={() => onclick("JK Tyres")} className="but">Jk tryes</button>
        <button onClick={() => onclick("Ultramile")} className="but">Ultramile</button>
        <button onClick={() => onclick("Yokohama")} className="but">Yokohama</button>
      </div>
      <h1 className="heading">Tyres</h1>
      <div class="container1">
        {data1.map((item) => (
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
        ))}
      </div>
    </>
  );
};

export default Allservice;
