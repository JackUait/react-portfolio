import React, { useState } from "react";
import classes from "./Skills.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import SubHeader from "../../components/SubHeader/SubHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Skills = () => {
	const [skills] = useState([
		{ percent: 100, name: "HTML" },
		{ percent: 99, name: "CSS" },
		{ percent: 75, name: "JavaScript" },
		{ percent: 65, name: "English" },
		{ percent: 60, name: "React" },
		{ percent: 35, name: "React Native" },
	]);

	return (
		<div>
			<HeaderText color="#fff">Skills</HeaderText>
			<SubHeader style={{ marginBottom: 20 }}>what I can do</SubHeader>
			{skills.map((skill, id) => {
				return (
					<ProgressBar key={id} percent={skill.percent} name={skill.name} />
				);
			})}
		</div>
	);
};

export default Skills;
