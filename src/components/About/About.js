import React from 'react';

import { Container, FirstColumn, Title, Subtitle, SecondColumn, Detail, LeftContainer, NumberContainer, RightContainer, DetailTitle, DetailDescription } from './styles';

export const About = () => {
	return (
		<Container>
			<FirstColumn>
				<Title>What’s different about Manage?</Title>
				<Subtitle>Manage provides all the functionality your team needs, without 
				  the complexity. Our software is tailor-made for modern digital 
				  product teams. </Subtitle>
			</FirstColumn>
			<SecondColumn>
				<Detail>
					<LeftContainer>
						<NumberContainer>01</NumberContainer>
					</LeftContainer>
					<RightContainer>
						<DetailTitle>Track company-wide progress</DetailTitle>
						<DetailDescription> See how your day-to-day tasks fit into the wider vision. Go from 
						  tracking progress at the milestone level all the way done to the 
						  smallest of details. Never lose sight of the bigger picture again.
					    </DetailDescription>
					</RightContainer>
				</Detail>
				<Detail>
					<LeftContainer>
						<NumberContainer>02</NumberContainer>
					</LeftContainer>
					<RightContainer>
						<DetailTitle>Advanced built-in reports</DetailTitle>
						<DetailDescription>
							Set internal delivery estimates and track progress toward company 
							  goals. Our customisable dashboard helps you build out the reports 
							  you need to keep key stakeholders informed.
						</DetailDescription>
					</RightContainer>
				</Detail>
				<Detail>
					<LeftContainer>
						<NumberContainer>03</NumberContainer>
					</LeftContainer>
					<RightContainer>
						<DetailTitle>Everything you need in one place</DetailTitle>
						<DetailDescription>Stop jumping from one service to another to communicate, store files, 
						track tasks and share documents. 
						Manage offers an all-in-o</DetailDescription>
					</RightContainer>
				</Detail>
			</SecondColumn>
		</Container>
	)
};	