import React, { useState } from "react";

export const Semaforo = () => {
	const [colorBox, setColorBox] = useState("");

	return (
		<div id="theOne">
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={
						"red light " + (colorBox == "red" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("red");
					}}></div>
				<div
					className={
						"yellow light " +
						(colorBox == "yellow" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("yellow");
					}}></div>
				<div
					className={
						"green light " + (colorBox == "green" ? "selected" : "")
					}
					onClick={() => {
						setColorBox("green");
					}}></div>
			</div>
		</div>
	);
};
