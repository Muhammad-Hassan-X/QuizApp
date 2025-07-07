import COLORS from "@/src/constants/colors";
import { Platform, StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
	button: {
		marginVertical: 10,
		width: 400,
		height: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 34,
	},
	txt: {
		fontSize: 18,
		color: "#ffff",
		fontWeight: "800",
	},
	shadow: {
		...Platform.select({
			ios: {
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 3,
				},
				shadowOpacity: 0.27,
				shadowRadius: 4.65,
			},
			android: {
				elevation: 6,
			},
		}),
	},
	container: {
		flex: 1,
		marginTop: 20,
		alignItems: "center",
		justifyContent: "space-between",
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
		color: "#7bbae3",
	},
	buttoncontainer: {
		marginBottom: 40,
	},
});

export default commonStyles;
