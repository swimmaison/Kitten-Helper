import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function KittenTable(props){
    const classes = useStyles();
    const header = Object.keys(props).map((item,i) => <TableCell key={i}>{item}</TableCell>);
    let tabData;
for (let i = 0; i < props.dates.length; i++) {
    let entries
    header.forEach((column) => {
     entries.push(<TableCell key={i}>{props[column][i]}</TableCell>) 
 })
 tabData.push(<TableRow key={i}>{entries}</TableRow>)
}

return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
        <TableRow>
            {header}
        </TableRow>
    </TableHead>
    <TableBody>
        {tabData}
    </TableBody>
</Table>
</TableContainer>
}