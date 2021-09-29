import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from './correctocss'

function Correcto() {
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
        Correcto
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
                Recuperacion de contraseña 
                <br/>‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎‎‎      ‏‏‎‎      ‏‏‎‎      ‏‏‎
                Exitosa
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
export default Correcto;