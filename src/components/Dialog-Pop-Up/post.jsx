import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
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

function PostPopUp(props) {
    const classes = useStyles();

    let values = {
        title: "",
        text: "",
        author: ""
    }

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
                                <h3>{props.title}</h3>
                            </Title>
                            <OpinionText>
                                <text>
                                    {props.message}
                                </text>
                            </OpinionText>
                            <Author>Author: {props.author}</Author>
                            <DateBox>{props.time}</DateBox>
                        </TextWrapper>
                    </PreviewWrapper>
                    {/*<hr />
                    <EditingWrapper>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Title" defaultValue={values.title}/>
                            <TextField
                                id="outlined-multiline-static"
                                label="Write your OpenOpinion here"
                                defaultValue={values.text}
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Author"
                                defaultValue={values.author}
                                variant="outlined"
                            />
                        </form>
                    </EditingWrapper>*/}
                </DialogBox>
            </div>
        </Dialog>
    );
}

export default PostPopUp;
