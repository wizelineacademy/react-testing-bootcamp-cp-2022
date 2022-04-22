const Image = ({ title, date, url }) => {
	return (
		<>
			<p>{title}</p>
			<p>{date}</p>
			<img src={url} alt={title} />
		</>
	);
};

export default Image;
