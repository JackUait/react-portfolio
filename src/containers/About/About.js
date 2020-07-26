import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import WhiteButton from "../../components/WhiteButton/WhiteButton";
import Card from "../../components/Card/Card";
import classes from "./About.module.css";
import face from "../../img/me.png";

const About = ({ scrolled }) => {
	return (
		<div className={classes.wrapper}>
			<HeaderText>About me</HeaderText>
			<SubHeader>sth you need to know</SubHeader>
			<Card
				style={{ marginTop: 5 }}
				image={face}
				alt="Hello I am supposed to be here. Reload the page to see me"
				back={
					<div>
						<h1>Evgeniy Pyatkov</h1>
						<p>Frontend Developer</p>
						<div className={classes.backIcons}>
							<a
								href="https://vk.com/jackuait"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className={classes.icon + " fa fa-vk"}></i>
							</a>
							<a
								href="https://github.com/JackUait"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className={classes.icon + " fa fa-github"}></i>
							</a>
						</div>
					</div>
				}
			/>
			<p className={classes.text}>
				I’m a Frontend Developer from Rostov-on-Don, Russia. I love to create
				websites using{" "}
				<span style={{ color: "#3AE2F0", fontWeight: 500 }}>React</span>. Also I
				have a little experience of
				<span style={{ color: "#31DA83", fontWeight: 500 }}> Android</span> and
				<span style={{ color: "#000000", fontWeight: 500 }}> IOS</span>{" "}
				application development using{" "}
				<span style={{ color: "#3AE2F0", fontWeight: 500 }}>React Native</span>{" "}
				and basic Backend knowledges in{" "}
				<span style={{ color: "#8CC84B", fontWeight: 500 }}>Node.js</span> (
				<span style={{ color: "#363636", fontWeight: 500 }}>Express</span>). You
				can know more about me in{" "}
				<a
					href="https://hh.ru/resume/02279959ff0622e6200039ed1f686d6636706a"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecorationColor: "#D6001C" }}
				>
					<span style={{ color: "#D6001C", fontWeight: 500 }}>my resume</span>
				</a>
			</p>
			<a
				href="https://hh.ru/resume/02279959ff0622e6200039ed1f686d6636706a"
				target="_blank"
				rel="noopener noreferrer"
			>
				<WhiteButton
					text={"View resume"}
					style={{ marginTop: 30, marginBottom: 15 }}
				/>
			</a>
		</div>
	);
};

export default About;
