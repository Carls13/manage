import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-weight: bold;
	text-align: center;
	margin: 10px 0;
`;

export const Slider = styled.div`
	display: flex;
	flex-direction: row;
	padding: 40px;
	margin: 10px;
	width: 100%;

	@media screen and (max-width: 600px) {
		flex-direction: column;
		margin: unset;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	text-align: center;
	height: auto;
	margin: 5px;
	background-color: hsl(0, 0%, 98%);

	@media screen and (max-width: 600px) {
		height: 40vh;
		margin-bottom: 10vh;
	}
`;

export const Picture = styled.img`
	display: block;
	margin: 10px auto -15% auto ;
	width: 30%;
	height: auto;
	position: relative;
	top: -30%;

	@media screen and (max-width: 600px) {
		top: -25%;
	}
`;

export const Name = styled.h6`
	margin: 10px 0;
`;

export const Description = styled.p`
`;

export const Anchor = styled.a`
	text-decoration: none;
	background-color: hsl(12, 88%, 59%);
	padding: 10px;
	border-radius: 15px;
    width: auto;
	display: block;
	margin: auto;
	text-align: center;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;

