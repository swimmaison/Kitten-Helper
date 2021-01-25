/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function rand () {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle () {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function ModalButton (props) {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (props.state !== undefined) {
      setOpen(props.state)
    }
  })

  const handleOpen = () => {
    setOpen(true)
    if (props.toOpen !== undefined) {
      props.toOpen()
    }
  }

  const handleClose = () => {
    setOpen(false)
    if (props.toClose !== undefined) {
      props.toClose()
    }
  }

  const handleSubmit = (event) => {
    handleClose()
    props.onClick(event)
  }

  return (
      <div>
          <Button variant="contained" type="button" onClick={handleOpen}>
              {props.label}
          </Button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
              <div style={modalStyle} className={classes.paper}>
                  <Grid container alignItems="center" justify="center" direction="column">
                      <Grid item>
                          {props.children}
                      </Grid>
                      <br />
                      <Grid item>
                          <Button
        variant="contained"
        color="primary"
        size="small"
        className="button"
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >Save</Button>
                      </Grid>
                  </Grid>
              </div>
          </Modal>
      </div>
  )
}
