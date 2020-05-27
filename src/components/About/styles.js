import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	margin: 0 10px;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 600px) {
		flex-direction: column;
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
		text-align: center;
	}
`;

export const Title = styled.h2`
	margin: 10px 0;
`;

export const Subtitle = styled.p`
	text-align: left;

	@media screen and (max-width: 600px) {
		text-align: center;
	}
`;

export const SecondColumn = styled.div`
	width: 40%;
	margin-left: 10%;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		width: 100%;
		margin: unset;
		text-align: center;
	}
`;

export const Detail = styled.div`
	display: flex;
	flex-direction: row;
	padding: 10px;
`;

export const LeftContainer = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
`;

export const NumberContainer = styled.span`
	background-color: hsl(12, 88%, 59%);
	padding: 10px;
	border-radius: 15px;
    width: auto;
	display: block;
	margin: 0 auto;
	text-align: center;
	color: white;
`;

export const RightContainer = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

export const DetailTitle = styled.h5`
	margin: 10px 0;

	@media screen and (max-width: 600px) {
		margin: unset;
		text-align: left;
	}
`;

export const DetailDescription = styled.p`
	text-align: left;
`;

