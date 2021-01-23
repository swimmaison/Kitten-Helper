/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'

function a11yProps (index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`
  }
}

function LinkTab (props) {
  return (

      <Tab
      component={Link}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

export default function Navbar (props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(parseInt(props.currPage))

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
      <div className={classes.root}>
          <AppBar position="static">
              <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
        >
                  <LinkTab label="Feeding" to={'/kitten/' + props.id + '/feeding'} {...a11yProps(0)} />
                  <LinkTab label="Weight" to={'/kitten/' + props.id + '/weight'} {...a11yProps(1)} />
                  <LinkTab label="Photos" to={'/kitten/' + props.id + '/photo'} {...a11yProps(2)} />
              </Tabs>
          </AppBar>
      </div>
  )
}
