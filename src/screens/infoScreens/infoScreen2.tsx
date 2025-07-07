import { View, Image, Text } from "react-native";
import React, { FC } from "react";
import commonStyles from "@/styles/commonCss";
import Button from "@/components/ui/Button";

const infoScreen2: FC = () => {
	return (
		<View style={commonStyles.container}>
			<Image
				source={require("@/assets/images/splash3.png")}
				style={commonStyles.image}
				resizeMode='contain'
			/>
			<Text style={[commonStyles.text]}>
				BrainFuel The fun way to get smarter.
			</Text>
			<View style={commonStyles.buttoncontainer}>
				<Button
					text='GET STARTED'
					color='#7bbae3'
				/>
				<Button
					text='I ALREADY HAVE AN ACCOUNT'
					color='#ffff'
					textColor='#7bbae3'
				/>
			</View>
		</View>
	);
};

export default infoScreen2;
