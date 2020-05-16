import React from "react";
import classes from "./Header.module.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import BlackButton from "../../components/BlackButton/BlackButton";
import Music from "../../components/Music/Music";

const Header = ({ goTo, moveDown }) => {
	return (
		<div>
			<Music />
			<h1 className={classes.name}>Evgeniy Pyatkov</h1>
			<SubHeader>Frontend Developer from Rostov-on-Don, Russia</SubHeader>
			<BlackButton
				onClick={goTo}
				style={{ marginTop: 200 }}
				text={"Let's Talk"}
			/>
			<div onClick={moveDown}>
				<div className={classes.downButton}>
					<p className={classes.goDown}>or</p>
					<p className={classes.goDown}>see below</p>
					<i className={"material-icons " + classes.icon}>expand_more</i>
				</div>
			</div>
		</div>
	);
};

export default Header;
