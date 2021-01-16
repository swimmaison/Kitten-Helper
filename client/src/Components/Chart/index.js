import React from 'react';
import {Line} from 'react-chartjs-2';

export default function Chart(props) {

    const dates = props.data.map((obj) => obj.date);
    const points = props.data.map((obj) => obj[Object.keys(obj)[1]]);
    const data = {
        labels: dates,
        datasets: []
    };
    if (props.recMins === undefined) {
        data.datasets = [{
            label: 'Weight',
            fill: false,
            data: points
        }]
    } else {
        data.datasets = [{
            label: 'Weight',
            fill: false,
            data: points
        }, {
            label: 'Recommended minimum',
            fill: false,
            data: props.recMins
        }, {
            label: 'Recommended maximum',
            fill: '-1',
            data: props.recMaxs
        }, ]
    }
    return <div> <Line data = {data} /></div> ;
}