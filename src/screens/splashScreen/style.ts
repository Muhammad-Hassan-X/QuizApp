import COLORS from "@/src/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	image: {
		width: 350,
		height: 350,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "900",
		fontSize: 30,
		color: COLORS.fontcolor,
	},
});

export default styles;
