import React from "react";
import classes from "./References.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";

const References = () => {
	return (
		<div className={classes.wrapper}>
			<HeaderText color="#fff">References</HeaderText>
			<SubHeader>who says, what says</SubHeader>
			<div className="flex">
				<p className={classes.quote}>
					When an unknown printer took a galley of type and scrambled it to make
					a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged.
				</p>
				<p className={classes.author}>John DOE</p>
				<p className={classes.author}>Project Manager @Henkel</p>
			</div>
		</div>
	);
};

export default References;
