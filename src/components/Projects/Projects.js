import React, { useState } from "react";
import classes from "./Projects.module.css";

const Projects = ({ choosen }) => {
	const [projects] = useState({
		all: [
			{
				url:
					"https://thumbs.dreamstime.com/b/%D0%BF-%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-apps-ui-%D0%B8-%D0%B8-ux-%D0%BF%D0%B5%D1%80%D0%B5-%D0%B2%D0%B8%D0%B6%D0%BD%D0%BE%D0%B9-53749243.jpg",
				projectLink: "#",
				id: 1,
			},
			{
				url:
					"https://cdn.dribbble.com/users/2094761/screenshots/8193558/media/6eec2be01bc399ff9604d6df984a0703.png",
				projectLink: "#",
				id: 2,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 3,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 4,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 5,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 6,
			},
			{
				url:
					"https://www.computerra.ru/wp-content/uploads/2019/11/400-400-min-site.png",
				projectLink: "#",
				id: 7,
			},
			{
				url:
					"https://sun9-47.userapi.com/c858024/v858024459/791f2/ul1j8fOudTw.jpg?ava=1",
				projectLink: "#",
				id: 8,
			},
			{
				url:
					"https://www.digitalkure.com/wp-content/uploads/2018/09/guvenetiket-dis.jpg",
				projectLink: "#",
				id: 9,
			},
		],
		mobile: [
			{
				url:
					"https://thumbs.dreamstime.com/b/%D0%BF-%D0%BE%D1%81%D0%BA%D0%B8%D0%B9-%D0%BD%D0%B0%D0%B1%D0%BE%D1%80-apps-ui-%D0%B8-%D0%B8-ux-%D0%BF%D0%B5%D1%80%D0%B5-%D0%B2%D0%B8%D0%B6%D0%BD%D0%BE%D0%B9-53749243.jpg",
				projectLink: "#",
				id: 1,
			},
			{
				url:
					"https://cdn.dribbble.com/users/2094761/screenshots/8193558/media/6eec2be01bc399ff9604d6df984a0703.png",
				projectLink: "#",
				id: 2,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 3,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 4,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 5,
			},
			{
				url:
					"https://static.vecteezy.com/system/resources/thumbnails/000/182/700/small_2x/mobile-app-gui2.jpg",
				projectLink: "#",
				id: 6,
			},
		],
		web: [
			{
				url:
					"https://www.computerra.ru/wp-content/uploads/2019/11/400-400-min-site.png",
				projectLink: "#",
				id: 1,
			},
			{
				url:
					"https://sun9-47.userapi.com/c858024/v858024459/791f2/ul1j8fOudTw.jpg?ava=1",
				projectLink: "#",
				id: 2,
			},
			{
				url:
					"https://www.digitalkure.com/wp-content/uploads/2018/09/guvenetiket-dis.jpg",
				projectLink: "#",
				id: 3,
			},
		],
	});

	if (!choosen) choosen = "all";

	return (
		<div>
			<ul className={classes.list}>
			<li className={classes.listItem}>All</li>
			<li className={classes.listItem}>Mobile Apps</li>
			<li className={classes.listItem}>Web</li>
		</ul>
		<div className={classes.wrapper}>
			
			{projects[choosen].map((project, id) => {
				return id <= 5 ? (
					<a href="#1" key={project.id} className={classes.imageWrapper}>
						<img
							alt={"Project " + project.id}
							className={classes.image}
							src={project.url}
						/>
					</a>
				) : null;
			})}
		</div>
		</div>

	);
};

export default Projects;
