import { memo } from "react";
import { View, StyleSheet } from "react-native";
import TextButton from "components/TextButton";
import { Colors } from "const";
const ToSignUp = ({ link, text, onPress }) => {
	return (
		<View style={styles.text}>
			<TextButton
				textStyle={{
					color: Colors.textWhite,
					marginRight: 10,
					textDecorationLine: "underline",
				}}
				title={link}
				onPress={onPress}
			/>
			<TextButton title={text} onPress={onPress} />
		</View>
	);
};
export default memo(ToSignUp);
const styles = StyleSheet.create({
	text: {
		flex: 1,
		flexDirection: "row",
		color: "red",
	},
});
