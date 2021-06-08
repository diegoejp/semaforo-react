import React, { useState } from "react";
import PropTypes from "prop-types";

const Semaforo = props => {
	const aux = { boxShadow: "0 0 100px #4f9" };
	const [up, setUp] = useState(null);
	const [middle, setMiddle] = useState(null);
	const [down, setDown] = useState(null);

	function apretarA() {
		setUp(aux);
		setMiddle(null);
		setDown(null);
	}
	function apretarB() {
		setUp(null);
		setMiddle(aux);
		setDown(null);
	}
	function apretarC() {
		setUp(null);
		setMiddle(null);
		setDown(aux);
	}

	return (
		<>
			<div className="palo"></div>
			<div className="cuerpo">
				<div className="luz rojo " style={up} onClick={apretarA}></div>
				<div
					className="luz amarillo"
					style={middle}
					onClick={apretarB}></div>
				<div
					className="luz verde"
					style={down}
					onClick={apretarC}></div>
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
