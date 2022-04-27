import styled from "styled-components";

const DateField = ({ date, setDate, handleClick }) => {
	const handleDateChange = (e) => {
		setDate(e.target.value);
	};

	return (
		<DateFieldContainer>
			<DatePicker
				type="date"
				value={date}
				data-testid="date-field"
				onChange={handleDateChange}
			/>
			<Button onClick={() => handleClick(date)}>Show</Button>
		</DateFieldContainer>
	);
};

const DateFieldContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const DatePicker = styled.input`
	padding: 5px;
`;

const Button = styled.button`
	padding: 0px 10px;
	margin-left: 10px;
	border: 2px solid #b5e1b1;
	border-radius: 5px;
	background-color: #f0fbf1;
	&:hover {
		background-color: #e4f1e5;
	}
`;

export default DateField;
