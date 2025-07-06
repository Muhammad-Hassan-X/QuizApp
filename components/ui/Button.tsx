import { Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { CustomButtonProps } from "@/expo-env";
import commonStyles from "@/styles/commonCss";
import COLORS from "@/src/constants/colors";

const Button: FC<CustomButtonProps> = ({ color, text, textColor }) => {
	const containerStyle = [
		commonStyles.button,
		{ backgroundColor: color || COLORS.fontcolor },
		{ color: textColor || COLORS.fontcolor },
	];
	const textStyle = [commonStyles.txt, { color: textColor || "#ffff" }];

	return (
		<TouchableOpacity style={containerStyle}>
			<Text style={textStyle}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
