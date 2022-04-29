import React from "react";
import { useCtxValue } from "../hooks/context";

function Content() {
	const { data, requestLatestData } = useCtxValue();
	return data ? (
		<div>
			<h2 data-testid="title">{data.title}</h2>
			<img src={data.url} alt={data.title} width="300" />
			<p>{data.explanation}</p>
		</div>
	) : (
		<div className="card-panel red darken-4 white-text">
			<h2>Error</h2>
			<p data-testid="error-message">There was an error, please try again.</p>
			<button
				onClick={() => requestLatestData()}
				className="btn white black-text"
			>
				Try again
			</button>
		</div>
	);
}

export default Content;
