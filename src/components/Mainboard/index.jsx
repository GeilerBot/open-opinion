import React from 'react'
import { Wrapper, Container } from './MainboardElements'
import Pin from '../Pin'
import pinData from '../../data/Pins.data'
import './mainboard.css'

function Mainboard() {
    return (
      <div>
          <Wrapper>
              <Container className='mainboard__container'>
                  {pinData.map((pins, index) => {
                      return (
                          <Pin img={pins.img}/>
                      );
                  })
                  }

              </Container>
          </Wrapper>
      </div>
    );
}

export default Mainboard