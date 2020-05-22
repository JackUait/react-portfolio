import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import Card from "../../components/Card/Card";
import classes from "./About.module.css";

const About = ({ scrolled }) => {
	return (
		<div className={classes.wrapper}>
			<HeaderText>About me</HeaderText>
			<SubHeader>sth you need to know</SubHeader>
			<Card
				style={{marginTop: 5}}
				image="https://soupofpossibilities.com/wp-content/uploads/2018/05/Steve_Jobs_500x.png"
				alt="Hello it's me"
				back={
					<div>
						<h1>Evgeniy Pyatkov</h1>
						<p>Frontend Developer</p>
						<div className={classes.backIcons}>
							<i className={classes.icon + " fa fa-vk"}></i>
							<i className={classes.icon + " fa fa-github"}></i>
						</div>
					</div>
				}
			/>
			<p className={classes.text}>
				Hello, I’m a Frontend Developer from Rostov-on-Don, Russia. I love to
				create websites using <span style={{ color: "#7DE1F9" }}>React</span>{" "}
				and other lower-level technologies. Also I have a little experience of
				<span style={{ color: "#31DA83" }}> Android</span> and
				<span style={{ color: "#000000" }}> IOS</span> development using{" "}
				<span style={{ color: "#7DE1F9" }}>React Native</span>. I want to help
				create something interesting and complex. Contact me if you are
				interested <i className="fa fa-heart" style={{ color: "#e74c3c" }}></i>
			</p>
			<WhiteButton text={"Download resume"} style={{ marginTop: 30, marginBottom: 15 }} />
		</div>
	);
};

export default About;
