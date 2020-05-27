import React, { useState, Fragment } from 'react';

import { HeaderContainer, 
		LogoContainer, 
		Logo, 
		MenuContainer, 
		Option, 
		ButtonContainer, 
		Anchor, 
		BurgerContainer, 
		Burger, 
		BlackBackground,
		MobileMenu,
		MobileOption } from './styles';

import logo from './logo.svg';
import burger from './icon-hamburger.svg';

export const Header = () => {
	const [showMenu, toggleMenu] = useState(false)

	return (
		<Fragment>
			<BlackBackground showMenu={showMenu} />
			<HeaderContainer>
				<LogoContainer>
					<Logo src={logo} alt="Manage"/>
				</LogoContainer>
				<MenuContainer>
					<Option href="#contact">Pricing</Option>
					<Option href="#contact">Product</Option>
					<Option href="#contact">About Us</Option>
					<Option href="#contact">Careers</Option>
					<Option href="#contact">Community</Option>
				</MenuContainer>
				<ButtonContainer>
					<Anchor href="#contact">Get Started</Anchor>
				</ButtonContainer>
				<BurgerContainer>
					<Burger onClick={() => toggleMenu(!showMenu)} src={burger} alt="Manage" />
				</BurgerContainer>
			</HeaderContainer>
			<MobileMenu showMenu={showMenu}>
				<MobileOption href="#contact">Pricing</MobileOption>
				<MobileOption href="#contact">Product</MobileOption>
				<MobileOption href="#contact">About Us</MobileOption>
				<MobileOption href="#contact">Careers</MobileOption>
				<MobileOption href="#contact">Community</MobileOption>
			</MobileMenu>
		</Fragment>
	)
};