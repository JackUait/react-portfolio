import React from "react";
import classes from "./Talk.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import Email from "../../components/Email/Email";

const Talk = () => {
	return (
		<div>
			<HeaderText>Let's Talk</HeaderText>
			<SubHeader>tell me what you need</SubHeader>
			<Email />
			<WhiteButton text="Send now" />
		</div>
	);
};

export default Talk;
