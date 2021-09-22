import React from "react";
import {  } from "react-chartjs-2";
import Chart1 from "./Chart1";
import Card4Drop from "./Card4_row";

export default function Card1() {
  return (
    <>
      <div className="card4">
        <div className="card4_heading">Invest</div>
        <div className="drop_cont4_row">
          <Card4Drop title = "Crypto." value = "BTC"/>
          <Card4Drop title = "Curr." value = "USD"/>
          <Card4Drop title = "Units" value = "245"/>
          <Card4Drop title = "Model" value = "Lorem"/>
        </div>

        <div className="card4_cont">
          <div className="card4_col">
            <div className="graphdiv">
              <Chart1 />
            </div>
            <div className="graphdata">
              <div className="gdata1">
                <p>Model</p>
                <p>Crypto</p>
              </div>
            </div>
          </div>

          <div className="button">
            <div className="invest_button">Invest</div>
          </div>
        </div>
      </div>
    </>
  );
}
