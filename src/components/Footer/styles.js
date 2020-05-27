import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 20px;
	background-color: hsl(228, 39%, 23%);
	color: hsl(227, 12%, 61%);

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 25%;
	align-items: center;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

export const Logo = styled.img`
	width: auto;
	height: auto;
	display: block;
	margin: 10px auto;
`;

export const SocialMediaContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 50%;
`;

export const Icon = styled.img`
	width: 15%;
	margin: 2.5%;
	cursor: pointer;
`;

export const Option = styled.a`
	text-decoration: none;
	margin: 5px;
	cursor: pointer;

	&:hover {
		color: lightgray;
	}
`;

export const InputDiv = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px auto;
	width: 100%;
`;

export const Button = styled.button`
	width: 20%;
	font-weight: bold;
	text-decoration: none;
	background-color: hsl(12, 88%, 59%);
	padding: 10px;
	border-radius: 15px;
	display: block;
	text-align: center;
	color: white;
	cursor: pointer;
`;

export const Input = styled.input`
	&[disabled] {
		opacity: .3;
	}

	&::placeholder {
		text-align: center;
	}
	text-align: center;
	border: 1px solid #CCC;
	border-radius: 10px;
	padding: 8px 4px;
	display: block;
	width: 75%;
	margin-right: 5%;
`;

export const Copyright = styled.h4`
	text-align: center;
	font-weight: bold;
`