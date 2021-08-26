import React from 'react'
import {Line} from 'react-chartjs-2';

const state = {
    labels: [50,60,70,80,90,100,110,120,130,140,150],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [7,8,8,9,9,9,10,11,14,14,15]
      }
    ]
  }

  export default function Chart1() {
    return (
        <Line
            data={state}
            options={{
                title:{
                display:true,
                text:'',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}/>
    )}