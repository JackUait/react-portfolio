import React from "react";
import classes from "./Footer.module.css";
import SubHeader from "../../components/SubHeader/SubHeader";

const Footer = () => {
	return (
		<div>
			<SubHeader>Follow me everywhere</SubHeader>
			<i
				className="fa fa-vk"
				style={{
					color: "#ff6e6c",
					fontSize: 70,
					marginRight: 40,
					cursor: "pointer",
				}}
			></i>
			<i
				className="fa fa-github"
				style={{ color: "#ff6e6c", fontSize: 70, cursor: "pointer" }}
			></i>
		</div>
	);
};

export default Footer;
