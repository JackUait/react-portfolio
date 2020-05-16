import React from "react";
import classes from "./Portfolio.module.css";
import Chooser from "../../components/Chooser/Chooser";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";

const Portfolio = () => {
	return (
		<div>
			<HeaderText>Portfolio</HeaderText>
			<SubHeader>my recent works</SubHeader>
			<Chooser />
		</div>
	);
};

export default Portfolio;
