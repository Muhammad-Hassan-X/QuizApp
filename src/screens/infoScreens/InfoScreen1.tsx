import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { infoScreen1Styles } from "./style";
import CustomButton from "@/components/CustomButton/CustomButton";

const InfoScreen1: FC = () => {
	return (
		<View style={infoScreen1Styles.container}>
			<Image
				source={require("@/assets/images/splash2.png")}
				style={infoScreen1Styles.image}
			/>
			<Text style={infoScreen1Styles.text}>
				Create, share and play quizzes whenever and whenever you want
			</Text>
			<CustomButton />
		</View>
	);
};

export default InfoScreen1;
