import React, { useState } from "react";
import { Wrapper, Container } from "./PinElements";
import PostPopUp from "../Dialog-Pop-Up/post";

function Pin(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <img
            src={props.img}
            alt="test"
            id={props.id}
            onClick={handleClickOpen}
          />
          <div className="views">Views: {props.views}</div>
        </Container>
      </Wrapper>
      <PostPopUp
        isOpen={open}
        setOpen={setOpen}
        onClose={handleClose}
        img={props.img}
        onClick={handleClose}
        message={props.message}
        title={props.title}
        author={props.author}
        time={props.time}
      />
    </>
  );
}

export default Pin
