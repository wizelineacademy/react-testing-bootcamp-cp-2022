const formatDate = (date) => {
	const separatedDate = date.split("-");
	return `${separatedDate[2]}/${separatedDate[1]}/${separatedDate[0]}`;
};

export default formatDate;
