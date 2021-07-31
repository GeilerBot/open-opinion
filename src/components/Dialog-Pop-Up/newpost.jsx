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
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png",
  });

  const createPost = () => {
    axios.post("/post", values);
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
            <button type="submit" onClick={createPost}>
              Create Post
            </button>
          </EditingWrapper>
        </DialogBox>
      </div>
    </Dialog>
  );
}

export default PopUp;
