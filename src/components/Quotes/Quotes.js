import React from "react";
import classes from "./Quotes.module.css";

const Quotes = ({ quotes, currentQuote}) => {
	return (
		<div>
			<div className="flex">
				<p className={classes.quote}>{quotes[currentQuote].quote}</p>
				<p className={classes.author}>{quotes[currentQuote].author}</p>
				<p className={classes.activity}>{quotes[currentQuote].activity}</p>
			</div>
		</div>
	);
};

export default Quotes;
