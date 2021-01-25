/* eslint-disable react/prop-types */
import React from 'react'
import { Line } from 'react-chartjs-2'

export default function Chart (props) {
  let data = []
  if (typeof props.data === 'object' && props.data !== null && props.data !== undefined) {
    function compare (a, b) {
      // Use toUpperCase() to ignore character casing
      const dateA = a.date
      const dateB = b.date
      let comparison = 0
      if (dateA > dateB) {
        comparison = 1
      } else if (dateA < dateB) {
        comparison = -1
      }
      return comparison
    }
    const sortedData = props.data.sort(compare)
    const dates = sortedData.map((obj) => obj.date)
    const points = sortedData.map((obj) => obj[Object.keys(obj)[1]])
    data = {
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
  }
  return <div> <Line data = {data} key={props.recMins}/></div>
}
