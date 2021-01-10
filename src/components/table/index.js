function table(props){
    const header = Object.keys(props).map(item => <th>{item}</th>);

 let tabData;
for (let i = 0; i<props.dates.length; i++){
    let entries
 header.forEach((column) => {
     entries.push(<td>{column[i]}</td>) 
 })
 tabData.push(<tr>{entries}</tr>)
}

return <table class="table">
    <thead>
        <tr>
            {header}
        </tr>
    </thead>
    <tbody>
        {tabData}
    </tbody>
</table>
};
export default table