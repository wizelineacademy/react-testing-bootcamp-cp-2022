import styled from "styled-components";

const Description = ({ explanation }) => (
	<DescriptiveParagraph data-testid="description">
		{explanation}
	</DescriptiveParagraph>
);

const DescriptiveParagraph = styled.p`
	margin-top: 85px;
	text-justify: distribute;
	line-height: 30px;
`;

export default Description;
