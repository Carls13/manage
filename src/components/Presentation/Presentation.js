import React from 'react';

import { Container, FirstColumn, Title, Subtitle, Anchor, SecondColumn, Image } from './styles';

import illustration from './illustration-intro.svg';

export const Presentation = () => {
	return (
		<Container>
			<FirstColumn>
				<Title>Bring everyone together to build better products.</Title>
				<Subtitle>Manage makes it simple for software teams to plan day-to-day 
  					tasks while keeping the larger team goals in view. </Subtitle>
				<Anchor href="#contact">Get Started</Anchor>
			</FirstColumn>
			<SecondColumn>
				<Image src={illustration} alt="Manage"/>
			</SecondColumn>
		</Container>
	)
};	