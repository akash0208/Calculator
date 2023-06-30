import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeLoanScreen from "../screens/HomeLoanScreen";
import { NavigationContainer } from "@react-navigation/native";
import EmiList from "../screens/EmiList";
import { ImageBackground } from "react-native";
// import CarLoanScreen from "../screens/CarLoanScreen";
// import PersonalLoanScreen from "../screens/PersonalLoanScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeLoan" component={HomeLoanScreen} />
        <Stack.Screen name="EmiList" component={EmiList} />
        {/* <Stack.Screen name="CarLoan" component={CarLoanScreen} /> */}
        {/* <Stack.Screen name="PersonalLoan" component={PersonalLoanScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
