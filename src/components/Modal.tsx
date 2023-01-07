import React, { useState } from "react";
import Timer from "./Timer";
import { Backdrop } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { HeadingModal, ModalGameInfo, TitleModal } from "../styled-components/ModalInfo";
import { timeFormat } from "../utils/timeFormat";

type GameModalProps = {
  score: number;
  seconds: number;
  minutes: number;
};

const GameModal = ({ score, seconds, minutes }: GameModalProps) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: 350,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    p: 6,
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <MilitaryTechIcon sx={{ fontSize: 100, color: "#FFD700" }} />
          <TitleModal>You Win</TitleModal>
          <HeadingModal>
            Your Score :<ModalGameInfo> {score}</ModalGameInfo>
          </HeadingModal>
          <HeadingModal>
            Time : <ModalGameInfo> {timeFormat(seconds, minutes)}</ModalGameInfo>
          </HeadingModal>
        </Box>
      </Fade>
    </Modal>
  );
};

export default GameModal;
