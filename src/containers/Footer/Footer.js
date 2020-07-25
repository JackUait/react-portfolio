import React from "react";
import classes from "./Footer.module.css";
import SubHeader from "../../components/SubHeader/SubHeader";

const Footer = () => {
	return (
		<div>
			<SubHeader>Follow me everywhere</SubHeader>
			<a href="https://vk.com/jackuait">
				<i className={classes.icon + " fa fa-vk"}></i>
			</a>
			<a href="https://github.com/JackUait">
				<i className={classes.icon + " fa fa-github"}></i>
			</a>
		</div>
	);
};

export default Footer;
