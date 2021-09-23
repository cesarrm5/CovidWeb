import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import useStyles from './correctocss'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        margin: theme.spacing(2),
        text: "center",
        width: "100%",
        height: "30px",
        display: "flex",
        align_items: "center",
        justify_content: "center",
        
      },
  },
  paper: {
    backgroundColor: '#2f4050',
    border: '2px solid #90d44c',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: '#DA0063',
    justifyContent: 'center',
    ss: {
        border: "1px solid",
        padding: "0 1rem",
        margin: "1rem",
    },
  },
}));

function Incorrecto() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        error
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
                Error XXX al recuperacion 
                <br/>‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎       ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎
            de contraseña
            </h2>
            <div className={classes.root}>
          <Button onClick={handleClose} variant="contained">Cancelar</Button>
          </div>
          </div>

        </Fade>
      </Modal>
    </div>
  );
}
export default Incorrecto;