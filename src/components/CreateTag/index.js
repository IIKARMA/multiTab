import React, { useState, useEffect, useCallback } from "react";
import { TextInput, AccessibilityInfo, Keyboard } from "react-native";
import {
	Icon,
	VStack,
	IconButton,
	HStack,
	useToast,
	Box,
	Center,
	theme,
} from "native-base";
import { CustomToast } from "..";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createTags } from "../../redux/reducers/directoryReducer";
import { useDispatch } from "react-redux";
import { styles } from "./style";
const CreateTag = ({ languages }) => {
	const dispatch = useDispatch();
	const [visibleToast, setvisibleToast] = useState(false);

	useEffect(() => setvisibleToast(false), [visibleToast]);

	const handleButtonPress = () => {
		setvisibleToast(true);
	};

	const [text, setText] = useState("");
	const toast = useToast();

	const pressHandler = () => {
		const payload = {
			value: `#${text}`,
			color: "#" + (Math.random().toString(16) + "000000").substring(2, 8),
		};
		dispatch(createTags(payload));
		setText("");
		Keyboard.dismiss();
	};

	return (
		<VStack>
			<HStack space={5} style={{ alignItems: "center" }}>
				<TextInput
					value={text}
					onChangeText={(text) => setText(text)}
					placeholderTextColor='#fff'
					placeholder={languages.add_tag}
					style={styles.textInput}
				/>
				<IconButton
					onPress={
						text.length !== 0
							? pressHandler
							: () =>
									toast.show({
										placement: "top",
										render: () => {
											return (
												<Box
													borderRadius={5}
													background='danger.700'
													px='2'
													py='2'
													_text={{ color: "#fff", fontSize: "lg" }}
													mb={5555}>
													Введіть назву тегу
												</Box>
											);
										},
									})
					}
					p={2}
					mb='8'
					// variant='solid'
					bg='#138382'
					colorScheme='coolGray'
					borderRadius='full'
					icon={
						<Icon
							as={MaterialCommunityIcons}
							size='5'
							name='plus'
							color='warmGray.50'
						/>
					}
				/>
			</HStack>
			<CustomToast
				visible={visibleToast}
				message='Потрібео написати назву тегу'
			/>
		</VStack>
	);
};
export default CreateTag;
