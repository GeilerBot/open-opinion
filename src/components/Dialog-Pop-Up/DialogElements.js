import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const DialogStyles = styled.div`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  background-color: #eee;
  padding: 10px 20px 40px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 10%;
  right: -90%;
`;

export const DialogBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    justify-content: unset;
    align-items: center;
    flex-direction: row;
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  min-width: 800px;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
`;

export const ImgWrapper = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 350px;
  height: 350px;

  :hover {
    opacity: 0.5;
  }

  img {
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  height: 20px;
  margin: 5px;
  max-width: 300px;
  display: flex;
`;

export const OpinionText = styled.div`
  max-width: 400px;
  margin: 5px;
  display: flex;
`;

export const Author = styled.div`
  margin: 5px;
  display: flex;
`;

export const DateBox = styled.div`
  display: flex;
  margin: 5px;
`;

export const EditingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
