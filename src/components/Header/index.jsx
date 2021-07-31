import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import {
  Wrapper,
  LogoWrapper,
  HomePageButton,
  FollowingButton,
  SearchWrapper,
  SearchBarWrapper,
  ButtonWrapper,
  PostButton,
} from "./HeaderElements";
import DefaultImage from "../../images/camera.jpg";
import PopUp from "../Dialog-Pop-Up/newpost";
/*import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FaceIcon from "@material-ui/icons/Face";*/

function Header() {
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
        <div className="logo-and-name">
          <LogoWrapper>
            <IconButton>
              <PinterestIcon />
            </IconButton>
          </LogoWrapper>
          <HomePageButton>
            <a href="/">Homepage</a>
          </HomePageButton>
          <FollowingButton>
            <a href="/">Following</a>
          </FollowingButton>
        </div>
        {/*<SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" />
                        <button type="submit"></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>*/}
        <ButtonWrapper>
          <Button
            onClick={handleClickOpen}
            variant={"contained"}
            color="primary"
            disableElevation={true}
          >
            Create Post
          </Button>
        </ButtonWrapper>
      </Wrapper>
      <PopUp
        isOpen={open}
        setOpen={setOpen}
        onClose={handleClose}
        img={DefaultImage}
        onClick={handleClose}
      />
    </>
  );
}

export default Header;
