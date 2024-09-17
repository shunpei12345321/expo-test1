import { Image, View, StyleSheet, Text, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
	return (
		<ParallaxScrollView
			headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
			headerImage={
				<Image
					source={require("@/assets/images/partial-react-logo.png")}
					style={styles.reactLogo}
				/>
			}>
			<View style={styles.statusBar}>
				<View style={styles.rightIcons}>
					<View style={styles.wifiIcon} />
					<View style={styles.signalIcon} />
				</View>
			</View>

			<ThemedView style={styles.titleContainer}>
				<ThemedText type="title">Welcome!</ThemedText>
				<HelloWave />
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 1: Try it</ThemedText>
				<ThemedText>
					Edit{" "}
					<ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
					to see changes. Press{" "}
					<ThemedText type="defaultSemiBold">
						{Platform.select({ ios: "cmd + d", android: "cmd + m" })}
					</ThemedText>{" "}
					to open developer tools.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 2: Explore</ThemedText>
				<ThemedText>
					Tap the Explore tab to learn more about what's included in this
					starter app.
				</ThemedText>
			</ThemedView>
			<ThemedView style={styles.stepContainer}>
				<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
				<ThemedText>
					When you're ready, run{" "}
					<ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
					to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
					directory. This will move the current{" "}
					<ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
					<ThemedText type="defaultSemiBold">app-example</ThemedText>.
				</ThemedText>
			</ThemedView>
		</ParallaxScrollView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
	wifiIcon: {
		width: 17,
		height: 17,
		backgroundColor: "#1D1B20",
		opacity: 0.1,
	},
	rightIcons: {
		flexDirection: "row",
		alignItems: "center",
	},
	signalIcon: {
		width: 17,
		height: 17,
		marginLeft: 5,
		backgroundColor: "#1D1B20",
	},
	statusBar: {
		width: "100%",
		height: 39,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 24,
		paddingVertical: 10,
		position: "absolute",
		top: 3,
	},
});
