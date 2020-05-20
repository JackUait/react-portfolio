import React, { useState } from "react";
import classes from "./References.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import Quotes from "../../components/Quotes/Quotes";

const References = () => {
	const [quotes] = useState([
		{
			quote: "First quote",
			author: "First author",
			activity: "First work",
			id: 1,
		},
		{
			quote: "Second quote",
			author: "Second author",
			activity: "Second work",
			id: 2,
		},
		{
			quote: "Third quote",
			author: "Third author",
			activity: "Third work",
			id: 3,
		},
	]);
	const [currentQuote, setCurrentQuote] = useState(0);
	return (
		<div className={classes.wrapper}>
			<HeaderText color="#fff">References</HeaderText>
			<SubHeader>who says, what says</SubHeader>
			<Quotes
				quotes={quotes}
				currentQuote={currentQuote}
				changeHandler={(id) => setCurrentQuote(id)}
			/>
		</div>
	);
};

export default References;
