/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

export default function KittenTable (props) {
  const classes = useStyles()
  let header
  const tabData = []
  if (props.data[0] !== undefined) {
    header = Object.keys(props.data[0]).map((item, i) => <TableCell key={'header' + i}>{item}</TableCell>)

    for (let i = 0; i < props.data.length; i++) {
      const entries = Object.keys(props.data[0]).map((column) => <TableCell key={column + 'cell' + i}>{props.data[i][column]}</TableCell>
      )
      tabData.push(<TableRow key={'row' + i}>{entries}</TableRow>)
    }
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
