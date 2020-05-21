import React from "react";
import classes from "./Header.module.css";
import SubHeader from "../../components/SubHeader/SubHeader";
import BlackButton from "../../components/BlackButton/BlackButton";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = ({ goTo, moveDown }) => {
	const { width, height } = useWindowDimensions();
	console.log(height)
	return (
		<div>
			<h1 className={classes.name}>Evgeniy Pyatkov</h1>
			<SubHeader style={{ padding: "0px 10px" }}>
				Frontend Developer from Rostov-on-Don, Russia
			</SubHeader>
			<BlackButton
				onClick={goTo}
				style={{ marginTop: width > 600 && height > 800? 190 : 110 }}
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
