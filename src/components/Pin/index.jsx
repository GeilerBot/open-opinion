import React from "react";
import { Wrapper, Container } from "./PinElements";

function Pin(props) {
	return (
		<Wrapper>
			<Container>
				<img src={props.img} alt='test' id={props.id} />
			</Container>
		</Wrapper>
	);
}

export default Pin;
