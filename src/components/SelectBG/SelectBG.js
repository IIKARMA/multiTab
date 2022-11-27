import React, { memo, useState } from "react";
import { TouchableOpacity } from "react-native";
import { HStack, Icon } from "native-base";
import { theme } from "../../core/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const swatches = [
	"#6d597a",
	"#3f8efc",
	"#e63946",
	"#4d908e",
	"#ee6c4d",
	theme.card,
];

const SelectBG = ({ setSelectBG, setSelectColor, selectColor }) => {
	return (
		<HStack space={5} justifyContent='center' marginBottom={20}>
			{swatches.map((color, index) => (
				<TouchableOpacity
					onPress={() => {
						setSelectColor(color);
						setSelectBG(color);
					}}
					key={index}
					style={[
						{
							height: 40,
							width: 40,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 10,
							backgroundColor: color,
						},
					]}>
					{color === theme.card && selectColor !== theme.card && (
						<Icon
							as={MaterialCommunityIcons}
							size='8'
							name='close'
							color='gray.300'
						/>
					)}
					{color === selectColor && (
						<Icon
							as={MaterialCommunityIcons}
							size='8'
							name='check'
							color='gray.300'
						/>
					)}
				</TouchableOpacity>
			))}
		</HStack>
	);
};
export default SelectBG;
