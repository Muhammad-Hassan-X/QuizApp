import COLORS from "@/src/constants/colors";
import { StyleSheet } from "react-native";

export const infoScreen1Styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		justifyContent: "space-evenly",
		alignItems: "center",
	},

	image: {
		width: 300,
		height: 300,
	},
	text: {
		fontSize: 30,
		fontWeight: "800",
		textAlign: "center",
		marginTop: 50,
		color: COLORS.fontcolor,
	},
});
export const infoScreen2Styles = StyleSheet.create({});
export const infoScreen3Styles = StyleSheet.create({});
