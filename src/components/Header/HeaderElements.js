import styled from "styled-components";
import {
  dark_blue,
  light_blue,
  middle_blue,
  orange_color,
} from "Constants/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  color: black;
  justify-content: space-between;
  .logo-and-name {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  margin-left: 10px;
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

export const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

export const FollowingButton = styled(HomeButtons)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
`;

export const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 30px;
  margin-right: 10px;
  /* background-color: ${middle_blue}; */
  border-radius: 15px;
  .MuiButton-root {
    border-radius: 50px;
  }
`;
