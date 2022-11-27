import { Text, View, TouchableOpacity, Keyboard } from "react-native";
import { MainScreen, NewTask, ItemListScreen } from "../screens/";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import {
	setDisableCompleted,
	setIsDone,
} from "../redux/reducers/directoryReducer";
import { Icon, NativeBaseProvider } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../core/colors";
import { useDispatch, useSelector } from "react-redux";
import { BlurView } from "expo-blur";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const completed = useSelector(({ directory }) => directory.completed);
	const pressDone = () => {
		dispatch(setIsDone(true));
		navigation.goBack();
	};
	console.log(completed);
	return (
		<Navigator
			initialRouteName='Home'
			screenOptions={{
				headerTitleAlign: "center",
				headerTintColor: "#fff",
				presentation: "transparentModal",
				gestureEnabled: true,
				cardOverlayEnabled: true,
				...TransitionPresets.ModalPresentationIOS,
				headerStyle: {
					elevation: 0,
					shadowOpacity: 0,
					borderBottomWidth: 0,
				},
			}}>
			<Screen
				component={MainScreen}
				name='Home'
				options={{ headerShown: false }}
			/>
			<Screen
				initialParams={{ id: 2 }}
				component={NewTask}
				name='NewTask'
				options={({ route }) => ({
					headerStyle: {
						height: 40,
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
						backgroundColor: theme.card,
					},
					headerTitle: route.params.title,
					header: ({ route }) => (
						<View>
							<NativeBaseProvider>
								<BlurView tint='dark' intensity={100}>
									<View
										style={{
											paddingTop: 10,
											paddingRight: 16,
											height: 50,
											width: "100%",
											justifyContent: "space-between",
											alignItems: "center",
											flexDirection: "row",
										}}>
										<TouchableOpacity
											onPress={() => {
												Keyboard.dismiss();
												navigation.goBack();
											}}>
											<Icon
												as={MaterialCommunityIcons}
												size='10'
												name='chevron-left'
												_dark={{
													color: "warmGray.50",
												}}
												color='warmGray.50'
											/>
										</TouchableOpacity>

										{/* <Title
                      style={{ alignSelf: "center", color: theme.secondText }}>
                      {route.params.title}
                    </Title> */}

										<TouchableOpacity
											onPress={pressDone}
											disabled={!completed}
											style={[
												{
													borderColor: theme.completed,
													borderWidth: 1,
													borderRadius: 10,
												},
												completed && { backgroundColor: theme.completed },
											]}>
											<Text
												style={{
													textAlign: "center",
													padding: 8,
													fontSize: 16,
													color: theme.secondText,
												}}>
												Готово
											</Text>
										</TouchableOpacity>
									</View>
								</BlurView>
							</NativeBaseProvider>
						</View>
					),
				})}
			/>
			<Screen
				name='ItemList'
				component={ItemListScreen}
				options={({ route }) => ({
					headerRight: () => (
						<View
							style={{
								position: "relative",
								maxWidth: "80%",
								width: 20,
								height: 20,
								backgroundColor: theme.background,
							}}
						/>
					),

					title: route.params.title,
					headerStyle: {
						elevation: 0,
						shadowOpacity: 0,
						borderBottomWidth: 0,
						backgroundColor: theme.background,
					},
					headerBackTitleVisible: false,
					presentation: "modal",
					gestureEnabled: true,
					cardOverlayEnabled: true,
					...TransitionPresets.SlideFromRightIOS,
				})}
			/>
		</Navigator>
	);
};

export default HomeNavigator;
