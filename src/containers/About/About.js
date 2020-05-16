import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import classes from "./About.module.css";

const About = () => {
	return (
		<div className={classes.wrapper}>
			<HeaderText>About me</HeaderText>
			<SubHeader>sth you need to know</SubHeader>
			<img
				alt="Hello, it's me!"
				src="https://soupofpossibilities.com/wp-content/uploads/2018/05/Steve_Jobs_500x.png"
				className={classes.face}
			/>
			<p className={classes.text}>
				Hello, I’m a Frontend Developer from Rostov-on-Don, Russia. I hold a
				master degree of Web Design from the World University and scrambled it
				to make a type specimen book. It has survived not only five centuries.
			</p>
			<WhiteButton text={"Download resume"} style={{ marginTop: 30 }} />
		</div>
	);
};

export default About;
