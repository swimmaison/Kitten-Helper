/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import API from '../../utils/API'

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
  const [open, setOpen] = React.useState(props.state)
  function loadKittens () {
    API.getKittens()
      .then(res => {
        console.log(res.data)
      }
      )
      .catch(err => console.log(err))
  };

  const handleOpen = () => {
    setOpen(true)
    loadKittens()
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (event) => {
    handleClose()
    props.onClick(event)
  }

  return (
      <div>
          <button type="button" onClick={handleOpen}>
              {props.label}
          </button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
              <div style={modalStyle} className={classes.paper}>
                  {props.children}
                  <Button
        variant="contained"
        color="primary"
        size="small"
        className="button"
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >Save</Button>
              </div>
          </Modal>
      </div>
  )
}
