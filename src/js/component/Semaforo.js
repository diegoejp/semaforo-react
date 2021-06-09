import React, { useState } from "react";
import PropTypes from "prop-types";

const Semaforo = props => {
	const [selected, setSelected] = useState("red");

	return (
		<>
			<div className="palo"></div>
			<div className="cuerpo">
				<div
					className={"luz rojo " + (selected === "red" ? "on" : "")}
					onClick={() => setSelected("red")}></div>
				<div
					className={
						"luz amarillo " + (selected === "amarillo" ? "on" : "")
					}
					onClick={() => setSelected("amarillo")}></div>
				<div
					className={
						"luz verde " + (selected === "verde" ? "on" : "")
					}
					onClick={() => setSelected("verde")}></div>
			</div>
		</>
	);
};

// Semaforo.propTypes = {
// 	arriba: PropTypes.object,
// 	medio: PropTypes.object,
// 	abajo: PropTypes.object
// };

export default Semaforo;
