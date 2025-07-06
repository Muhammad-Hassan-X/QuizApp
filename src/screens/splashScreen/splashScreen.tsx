import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import styles from "./style";

const SplashScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("@/assets/images/splash.png")}
				style={styles.image}
			/>
			<Text style={styles.text}>Quizzical</Text>
		</View>
	);
};

export default SplashScreen;
