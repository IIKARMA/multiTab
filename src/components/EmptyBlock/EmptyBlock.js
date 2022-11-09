import { View, Text, Image } from "react-native";
import { styles } from "./style";
const EmptyBlock = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../icons/bookmark.png")}
        resizeMode='stretch'
        style={styles.image}
      />
      <Text style={styles.text}>Поки що тут нічого немає</Text>
    </View>
  );
};
export default EmptyBlock;
