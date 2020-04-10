import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Button from "@material-ui/core/Button";


import setting from ".././setup_1.png";
import tick from "./images/tick.png";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
      
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title">
                ++โปรดศึกษาการตั้งค่า ดังรูปอย่างละเอียด++
              </h3>
              <p>เลือกพิมพ์หรือบันทึกเป็น PDF แล้วปรับให้ไม่มีขอบ</p>
      <img src={setting} style={{height: '45vh'}}></img>
              <p>ในการตั้งค่าขั้นสูง "เลือก" พิมพ์ภาพพื้นหลัง</p>
              <p>"ไม่เลือก" พิมพ์หัวและท้าย</p>
              <img src={tick} style={{height: '10vh'}}></img>
              <div style={{display: 'block'}}>
              <Button
              id="setting-print"
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleClose}
            >
              ปิด
            </Button>
              </div>
      </div>
      
  );

  return (
    <div>
      <Button
              id="setting-print"
              variant="contained"
              color="secondary"
              onClick={handleOpen}
            >
              ตั้งค่าการพิมพ์
              
            </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}