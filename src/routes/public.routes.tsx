import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { Login } from "../screens/Login";

export function PublicRoute() {
    const Stack = createStackNavigator();
    
    return(
        <>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </>
    )
}