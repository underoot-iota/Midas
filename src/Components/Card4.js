import React from "react";
import {  } from "react-chartjs-2";
import Chart1 from "./Chart1";

export default function Card1() {
  return (
    <>
      <div className="card4">
        <div className="card4_heading">Invest</div>
        <div className="drop_cont4_row">
          <div className="card4_drop">
              <div className="drop_name_cont">
                <div className="drop_name">Crypto</div>
              </div>
              <div className="vert_line"></div>
              <div className="main_info">BTC</div>
          </div>
          <div className="card4_drop">
              <div className="drop_name_cont">
                <div className="drop_name">Curr.</div>
              </div>
              <div className="vert_line"></div>
              <div className="main_info">BTC</div>
          </div><div className="card4_drop">
              <div className="drop_name_cont">
                <div className="drop_name">Units</div>
              </div>
              <div className="vert_line"></div>
              <div className="main_info">BTC</div>
          </div><div className="card4_drop">
              <div className="drop_name_cont">
                <div className="drop_name">Model</div>
              </div>
              <div className="vert_line"></div>
              <div className="main_info">BTC</div>
          </div>
          {/* <div className="card4_drop">Curr.</div>
          <div className="card4_drop">Units</div>
          <div className="card4_drop">Model</div> */}
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
