import React from "react";
import { Modal } from "native-base";
import { SelectBG } from "../index";
const CustomSwatcherColor = ({
	closeModal,
	languages,
	theme,
	setSelectColor,
	selectColor,
	setSelectBG,
}) => {
	return (
		<>
			<Modal.Header
				_text={{
					color: "text.50",
					textAlign: "center",
					fontSize: "lg",
				}}
				borderBottomWidth='0'
				background='rgba(54,58,75,0.6)'>
				{languages.bg}
			</Modal.Header>
			<Modal.Body
				h='24'
				borderBottom={0}
				background='rgba(54,58,75,0.6)'
				borderColor='red'>
				<SelectBG
					setSelectBG={setSelectBG}
					setSelectColor={setSelectColor}
					selectColor={selectColor}
				/>
			</Modal.Body>
		</>
	);
};
export default CustomSwatcherColor;
