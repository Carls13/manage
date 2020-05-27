import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	margin: 0 10px;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const FirstColumn = styled.div`
	width: 30%;
	margin: 10px 5%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: unset;
	}
`;

export const Title = styled.h1`
	margin: 10px 0;
`;

export const Subtitle = styled.p`
	text-align: left;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
`;

export const SecondColumn = styled.div`
	width: 50%;
	display: flex;
	margin-left: 10%;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: unset;
	}
`;

export const Image = styled.img`
	width: 90%;
	height: auto;
	display: block;
	margin: auto;
`;

export const Anchor = styled.a`
	text-decoration: none;
	background-color: hsl(12, 88%, 59%);
	padding: 10px;
	border-radius: 15px;
    width: 50%;
    margin: 10px 0;
	text-align: center;
	color: white;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		display: block;
		margin: 15px auto;
	}
`;

