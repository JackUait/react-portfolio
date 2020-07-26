import React, { useState } from "react";
import classes from "./Projects.module.css";
import project1 from "../../img/store.png";
import project2 from "../../img/movies.png";

const Projects = () => {
	const [projects] = useState({
		all: [
			{
				url: project1,
				link: "http://jackstore.surge.sh/",
				id: 1,
			},
			{
				url: project2,
				link: "http://jackmovies.surge.sh/",
				id: 2,
			},
		],
		mobile: ["empty"],
		web: [
			{
				url: project1,
				link: "http://jackstore.surge.sh/",
				id: 1,
			},
			{
				url: project2,
				link: "http://jackmovies.surge.sh/",
				id: 2,
			},
		],
	});
	const [choosen, setChoosen] = useState("all");

	const capitalize = (s) => {
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	return (
		<div>
			<ul className={classes.list}>
				{Object.keys(projects).map((chooser, id) => {
					return (
						<li
							key={id}
							onClick={() => setChoosen(chooser)}
							style={{ color: choosen === chooser ? "#ff6e6c" : null }}
							className={classes.listItem}
						>
							{capitalize(chooser)}
						</li>
					);
				})}
			</ul>
			<div className={classes.wrapper}>
				{projects[choosen].map((project, id) => {
					if (project === "empty") {
						return <h1 className={classes.empty}>There's no projects yet</h1>;
					} else {
						return id <= 5 ? (
							<a
								href={project.link}
								key={project.id}
								className={classes.imageWrapper}
							>
								<img
									alt={"Project " + project.id}
									className={classes.image}
									src={project.url}
								/>
								<div className={classes.overlay}></div>
							</a>
						) : null;
					}
				})}
			</div>
		</div>
	);
};

export default Projects;
