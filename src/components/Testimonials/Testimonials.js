import React from 'react';

import { Container, Title, Slider, CardContainer, Picture, Name, Description, Anchor } from './styles';

import ali from './avatar-ali.png';
import anisha from './avatar-anisha.png';
import richard from './avatar-richard.png';
import shanai from './avatar-shanai.png';

export const Testimonials = () => {
	return (
		<Container>
			<Title>What they've said</Title>
			<Slider>
				<CardContainer>
					<Picture src={anisha} alt="Manage testimonials"/>
					<Name>Anisha Li</Name>
					<Description> 
						“Manage has supercharged our team’s workflow. The ability to maintain 
						visibility on larger milestones at all times keeps everyone motivated.”
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={ali} alt="Manage testimonials"/>
					<Name>Ali Bravo</Name>
					<Description> 
						“We have been able to cancel so many other subscriptions since using 
						Manage. There is no more cross-channel confusion and everyone is much 
						more focuse
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={richard} alt="Manage testimonials"/>
					<Name>Richard Watts</Name>
					<Description> 
						“Manage allows us to provide structure and process. It keeps us organized 
						and focused. I can’t stop recommending them to everyone I talk to!”
					</Description>
				</CardContainer>
				<CardContainer>
					<Picture src={shanai} alt="Manage testimonials"/>
					<Name>Shanai Gough</Name>
					<Description> 
						“Their software allows us to track, manage and collaborate on our projects 
						from anywhere. It keeps the whole team in-sync without being intrusive.”
					</Description>
				</CardContainer>
			</Slider>
			<Anchor href="#contact">Get Started</Anchor>
		</Container>
	)
};