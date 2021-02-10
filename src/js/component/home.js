import React from "react";
import { Semaforo } from "./semaforo.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Semaforo />
		</div>
	);
}
