import React from 'react';
import {Line} from 'react-chartjs-2';

function chart(props) {
    const data = {
        labels: props.dates,
        datasets: []
    };
    if (props.recMins === undefined) {
        data.datasets = [{
            label: 'Weight',
            fill: false,
            data: props.data1
        }]
    } else {
        data.datasets = [{
            label: 'Weight',
            fill: false,
            data: props.data1
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
export default chart;