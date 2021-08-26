import React from 'react'

export default function Card1() {
    return (
        <div className="Card1">
            <h2>Open Orders</h2>
            <div className="card1_cont">
                <div className="card1_row card1_row1">
                    <h5>Volume</h5>
                    <p>12345</p>
                    <p>12345</p>
                    <p>12345</p>
                    <p>12345</p>
                </div>
                <div className="vert"></div>
                <div className="card1_row card1_row2">
                    <h5>Unit</h5>
                    <p>12345</p>
                    <p>12345</p>
                    <p>12345</p>
                    <p>12345</p>
                </div>
                <div className="vert"></div>

                <div className="card1_row card1_row3">
                    <h5>Price</h5>
                    <p>$ 12345</p>
                    <p>$ 12345</p>
                    <p>$ 12345</p>
                    <p>$ 12345</p>
                </div>
                <div className="vert"></div>

                <div className="card1_row card1_row4">
                    <h5>Time</h5>
                    <p>2 hours</p>
                    <p>2 hours</p>
                    <p>2 hours</p>
                    <p>2 hours</p>
                </div>
                <div className="vert"></div>

                <div className="card1_row card1_row5">
                    <h5>Status</h5>
                    <p>completed</p>
                    <p>completed</p>
                    <p>Pending</p>
                    <p>completed</p>
                </div>
            </div>
            <div className="card1_arrows">
                <p> &lt; </p>
                <p> &gt; </p>
            </div>
        </div>
    )
}
