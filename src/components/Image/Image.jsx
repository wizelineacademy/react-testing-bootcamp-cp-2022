import styled from "styled-components";

import formatDate from "../../utils";

const Image = ({ title, date, url }) => (
	<Container>
		<h2>{title}</h2>
		<span>{formatDate(date)}</span>
		<img src={url} alt={title} />
	</Container>
);

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	h2 {
		text-align: center;
	}
	span {
		text-align: end;
	}
	img {
		width: 100%;
		height: 500px;
	}
`;

export default Image;
