import React, { FC } from "react";

import Button from "../ui/Button";
import { View } from "react-native";

const CustomButton: FC = () => {
	return (
		<View>
			<Button
				text='GET STARTED'
				color='#333b7d'
			/>
			<Button
				text='I ALREADY HAVE AN ACCOUNT'
				color='#f0edfe'
				textColor='#333b7d'
			/>
		</View>
	);
};

export default CustomButton;
