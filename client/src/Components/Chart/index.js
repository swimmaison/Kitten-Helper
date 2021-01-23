import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Chart (props) {
  console.log(props.data)
  if (typeof props.data === 'object' && props.data !== null) {
    const dates = props.data.map((obj) => obj.date)
    const points = props.data.map((obj) => obj[Object.keys(obj)[1]])
    const data = {
      labels: dates,
      datasets: []
    }
    if (props.recMins === undefined) {
      data.datasets = [{
        label: 'Amount',
        fill: false,
        data: points,
        backgroundColor: 'rgba(0,255,255,0.4)',
        borderColor: 'rgba(0,255,255,0.4)',
        pointBorderColor: '#001eff',
        pointBackgroundColor: '#001eff'
      }]
    } else {
      data.datasets = [{
        label: 'Weight',
        fill: false,
        data: points,
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#277a24'
      }, {
        label: 'Recommended minimum',
        fill: false,
        data: props.recMins
      }, {
        label: 'Recommended maximum',
        fill: '-1',
        data: props.recMaxs,
        backgroundColor: 'rgba(100,255,150,0.1)'
      }]
    }
    return <div> <Line data = {data} /></div>
  } else {
    return <div> <Line data={[]}/></div>
  }
}
