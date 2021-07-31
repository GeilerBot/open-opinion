import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import axios from "../../Helper/axios";
import qs from "querystring";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  DialogBox,
  PreviewWrapper,
  ImgWrapper,
  TextWrapper,
  Title,
  OpinionText,
  Author,
  EditingWrapper,
  DateBox,
  StyledIconButton,
} from "./DialogElements";

import Dialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function PopUp(props) {
  const classes = useStyles();

  const [value, setValue] = useState({
    title: "",
    text: "",
    author: "",
  });

  const onChange = (event) => {
    setValue(event.target.value);
  };

  let values = qs.stringify({
    title: "corona",
    message: "fewdfdsfasd",
    author: "Jonas",
    imgSrc:
      // "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
      "data:image/jpeg;base64,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",
  });

  const createPost = async () => {
    (await axios()).post("/post", values);
  };

  const handleClose = () => {
    props.onClick();
  };

  const handleClick = async () => {
    await createPost();
    handleClose();
  };

  return (
    <Dialog
      isOpen={props.isOpen}
      setOpen={props.setOpen}
      onClose={props.onClose}
    >
      <div>
        <StyledIconButton>
          <CloseIcon onClick={props.onClick} />
        </StyledIconButton>
        <DialogBox>
          <PreviewWrapper>
            <ImgWrapper>
              <img src={props.img} alt="preview-image" />
            </ImgWrapper>
            <TextWrapper>
              <Title>
                <h3>{value.title}</h3>
              </Title>
              <OpinionText>
                <text>{value.text}</text>
              </OpinionText>
              <Author>Author: {value.author}</Author>
              <DateBox>28th of July, 2021</DateBox>
            </TextWrapper>
          </PreviewWrapper>
          <hr />
          <EditingWrapper>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Title"
                name={"title"}
                value={value.title}
                onChange={onChange}
              />
              <TextField
                id="outlined-multiline-static"
                label="Write your OpenOpinion here"
                defaultValue={values.text}
                name={"text"}
                multiline
                rows={4}
                variant="outlined"
                value={value.text}
                onChange={onChange}
              />
              <TextField
                id="outlined-basic"
                label="Author"
                name={"author"}
                defaultValue={values.author}
                variant="outlined"
                value={value.author}
                onChange={onChange}
              />
            </form>
            <button type="submit" onClick={handleClick}>
              Create Post
            </button>
          </EditingWrapper>
        </DialogBox>
      </div>
    </Dialog>
  );
}

export default PopUp;
