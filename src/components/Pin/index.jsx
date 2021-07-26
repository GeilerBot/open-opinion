import React from 'react'
import {Wrapper, Container} from './PinElements'
import pinData from './../../data/Pins.data'

function Pin() {
    return (
        <Wrapper>
            <Container>
                {pinData.map((pins, index) => {
                    return (
                        <img src={pins.img} alt="test" id={pins.id} />
                    );
                })}
            </Container>
        </Wrapper>
    );
}

export default Pin