import React from "react";
import classes from "./Quotes.module.css";
import Switcher from "../Switcher/Switcher";

const Quotes = ({ quotes, currentQuote, changeHadler }) => {
	return (
		<div>
			<div className="flex">
				<p className={classes.quote}>{quotes[currentQuote].quote}</p>
				<p className={classes.author}>{quotes[currentQuote].author}</p>
				<p className={classes.author}>{quotes[currentQuote].activity}</p>
				<Switcher amount={quotes.length} onPick={(id) => changeHadler(id)} />
			</div>
		</div>
	);
};

export default Quotes;
