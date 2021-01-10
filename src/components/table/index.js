import React from 'react';

function table(props){
    const header = Object.keys(props).map((item,i) => <th key={i}>{item}</th>);
    let tabData;
for (let i = 0; i < props.dates.length; i++) {
    let entries
    header.forEach((column) => {
     entries.push(<td key={i}>{props[column][i]}</td>) 
 })
 tabData.push(<tr key={i}>{entries}</tr>)
}

return <table className="table">
    <thead>
        <tr>
            {header}
        </tr>
    </thead>
    <tbody>
        {tabData}
    </tbody>
</table>
}
export default table