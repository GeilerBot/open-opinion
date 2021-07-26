import React from 'react'
import { Wrapper, Container } from './MainboardElements'
import Pin from '../Pin'

function Mainboard() {
    return (
      <div>
          <Wrapper>
              <Container>
                  <Pin />
              </Container>
          </Wrapper>
      </div>
    );
}

export default Mainboard