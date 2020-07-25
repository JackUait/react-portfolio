import React, { useState, useEffect } from "react";
import classes from "./References.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import Quotes from "../../components/Quotes/Quotes";

const References = () => {
	const [quotes] = useState([
		{
			quote:
				"A genuine, compassionate friend who exhibits programming skills that excel beyond expectation, reflecting his incredibly driven nature.",
			author: "Alexa Bachurski",
			activity: "Software Engineer from Pittsburgh, USA",
			id: 1,
		},
		{
			quote:
				"He's doing his best to make his programs work as they supposed to",
			author: "Aleksey Berezhnoy",
			activity: "Genius Software Engineer",
			id: 2,
		},
		{
			quote:
				"He's a really good at school computer science. To be honest I haven't tested him anywhere else",
			author: "Irina Skorohodova",
			activity: "Writer, actress, schoolgirl, unemployed",
			id: 3,
		},
	]);
	let [currentQuote, setCurrentQuote] = useState(0);

	const body = [];
	for (let i = 0; i < quotes.length; i++) {
		body.push(
			<li
				className={classes.switcherItem}
				key={i}
				id={i}
				onClick={() => setCurrentQuote(i)}
				style={{ width: currentQuote === i ? 70 : 15 }}
			></li>,
		);
	}
	useEffect(() => {
		let counter = 0;

		let changeTimer = setTimeout(function tick() {
			if (counter === quotes.length - 1) {
				counter = 0;
				setCurrentQuote(0);
			} else {
				counter++;
				setCurrentQuote((prev) => prev + 1);
			}
			changeTimer = setTimeout(tick, 15000);
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "ArrowRight") {
				if (counter < quotes.length - 1) {
					counter++;
					setCurrentQuote((prev) => prev + 1);
				} else {
					counter = 0;
					setCurrentQuote(0);
				}
			}
			if (event.key === "ArrowLeft") {
				if (counter === 0) {
					counter = quotes.length - 1;
					setCurrentQuote(quotes.length - 1);
				} else {
					counter--;
					setCurrentQuote((prev) => prev - 1);
				}
			}
		});
	}, []);

	console.log(currentQuote);
	return (
		<div className={classes.wrapper}>
			<HeaderText color="#fff">References</HeaderText>
			<SubHeader>who says, what says</SubHeader>
			<Quotes quotes={quotes} currentQuote={currentQuote} />
			<ul className={classes.switcher}>{body}</ul>
		</div>
	);
};

export default References;
