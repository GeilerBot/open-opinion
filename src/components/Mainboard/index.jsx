import React, { useState, useEffect } from "react";
import { Wrapper, Container } from "./MainboardElements";
import Pin from "../Pin";
import axios from "Helper/axios";
import "./mainboard.css";

function Mainboard() {
  const [pinData, setPinData] = useState([]);

  useEffect(() => {
    axios.get("/post").then((data) => {
      console.log(data);
      setPinData(data.data);
    });
  }, []);
  return (
    <div>
      <Wrapper>
        <Container className="mainboard__container">
          {pinData.map((pins, index) => {
            return (
              <Pin
                key={index}
                img={pins.imgSrc}
                id={pins.id}
                views={pins.views}
                message={pins.post.message}
                title={pins.post.title}
                author={pins.post.author}
                time={pins.time}
              />
            );
          })}
        </Container>
      </Wrapper>
    </div>
  );
}

export default Mainboard;
