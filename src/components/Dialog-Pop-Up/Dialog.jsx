import React, { useEffect, useRef } from "react";
import {DialogStyles} from "./DialogElements";

/*let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};*/

function Dialog(props) {

  /*let dialogStyles = {
    width: "auto",
    maxWidth: "100%",
    margin: "0 auto",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "999",
    backgroundColor: "#eee",
    padding: "10px 20px 40px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",

    "@media and screen (max-width: 900px)": {
      width: "600px",
  }
  };*/

  const wrapperRef = useRef(null);
  //   const [dialogOpen, setDialogOpen] = useState(true);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        // setDialogOpen(false);
        props.setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  let dialog = (
    <DialogStyles>
      <div ref={wrapperRef}>{props.children}</div>
    </DialogStyles>
  );

  if (!props.isOpen) {
    dialog = null;
  }
  //   useOutsideAlerter(wrapperRef, dialog);
  return <div>{dialog}</div>;
}

export default Dialog;
