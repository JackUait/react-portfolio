import React, { useState } from "react";
import classes from "./Music.module.css";

const Music = () => {
	const [play, setPlay] = useState(false);
	const [pause, setPause] = useState(true);
	const url = "http://streaming.tdiradio.com:8000/house.mp3";
	let audio = new Audio(url);

	const playButton = () => {
		setPlay(true);
		setPause(false);
		audio.play();
	};

	const pauseButton = () => {
		setPlay(false);
		setPause(true);
		audio.pause();
	};
	return (
		<div>
			{play ? (
				<button onClick={pauseButton}>Pause</button>
			) : (
				<button onClick={playButton}>Play</button>
			)}
		</div>
	);
};

export default Music;
