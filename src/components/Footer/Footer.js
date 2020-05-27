import React from 'react';

import { Container, Column, Logo, SocialMediaContainer, Icon, Option, InputDiv, Input, Button, Copyright } from './styles';

import facebook from './icon-facebook.svg';
import pinterest from './icon-pinterest.svg';
import instagram from './icon-instagram.svg';
import twitter from './icon-twitter.svg';
import youtube from './icon-youtube.svg';
import logo from './logo.png';

export const Footer = () => {
	return (
		<Container>
			<Column>
				<Logo src={logo} alt="Manage"/>
				<SocialMediaContainer>
					<Icon src={facebook} alt="Manage"/>
					<Icon src={youtube} alt="Manage"/>
					<Icon src={twitter} alt="Manage"/>
					<Icon src={pinterest} alt="Manage"/>
					<Icon src={instagram} alt="Manage"/>
				</SocialMediaContainer>
			</Column>
			<Column>
				<Option>Home</Option>
				<Option>Pricing</Option>
				<Option>Products</Option>
				<Option>About us</Option>
			</Column>
			<Column>
				<Option>Careers</Option>
				<Option>Community</Option>
				<Option>Privacy Policy</Option>
			</Column>
			<Column>
				<InputDiv id="contact">
					<Input
						type="text"
						placeholder="Updates in your inbox..."
					/>
					<Button>Go</Button>
				</InputDiv>
				<Copyright>Copyright 2020. All rights reserved.</Copyright>
			</Column>
		</Container>
	)
};	