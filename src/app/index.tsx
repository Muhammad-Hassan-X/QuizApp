import { StyleSheet } from "react-native";
import React, { FC } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "../screens/splashScreen/splashScreen";
// import InfoScreen1 from "../screens/infoScreens/InfoScreen1";
import InfoScreen2 from "../screens/infoScreens/InfoScreen2";
const index: FC = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* <SplashScreen /> */}
			{/* <InfoScreen1 /> */}
			<InfoScreen2 />
		</SafeAreaView>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
	},
});
