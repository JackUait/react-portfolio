import React from "react";
import classes from "./Footer.module.css";
import SubHeader from "../../components/SubHeader/SubHeader";

const Footer = () => {
	return (
		<div>
			<SubHeader>Follow me everywhere</SubHeader>
			<i className={classes.icon + " fa fa-vk"}></i>
			<i className={classes.icon + " fa fa-github"}></i>
		</div>
	);
};

export default Footer;
