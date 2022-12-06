import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../screens/Home";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}