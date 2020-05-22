import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = ({ alt, image, back, style }) => {
	const [flipCard, setFlipCard] = useState(false);
	return (
		<div
			className={classes.container}
			onClick={() => setFlipCard(!flipCard)}
			style={{ ...style, transform: flipCard ? "rotateY(180deg)" : null }}
		>
			<div className={classes.flipper}>
				<div className={classes.front}>
					<img
						alt={alt ? alt : "Beautiful Image"}
						src={image}
						className={classes.face}
					/>
				</div>
				<div className={classes.back}>{back}</div>
			</div>
		</div>
	);
};

export default Card;
