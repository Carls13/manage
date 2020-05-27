import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 40px 80px;
	background-color: hsl(12, 88%, 59%);
	color: white;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const Text = styled.h1`
	width: 35%;
	margin-right: 45%;

	@media screen and (max-width: 600px) {
		margin-right: unset;
		text-align: center;
		width: 100%;
		margin-bottom: 15px;
	}
`;

export const Anchor = styled.a`
	text-decoration: none;
	color: hsl(12, 88%, 59%);
	padding: 10px;
	border-radius: 15px;
    width: auto;
	margin: auto;
	background-color: white;
	cursor: pointer;
`;