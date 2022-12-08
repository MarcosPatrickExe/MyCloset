import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import { theme } from "../global/styles/theme";
import { Home } from "../screens/Home";
import Icon from 'react-native-vector-icons/Feather';
import { ProductDetail } from "../screens/ProductDetail";
import { ShareCode } from "../screens/ShareCode";
import { RegisterProduct } from "../screens/RegisterProduct";

export function PrivateRoute() {
    Icon.loadFont();
    const Stack = createStackNavigator();
    
    return(
        <>
            <StatusBar backgroundColor={theme.colors.primary}/>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTitleAlign: 'center',
                headerTintColor: theme.colors.textWhite,
                headerTitleStyle: {
                    fontFamily: theme.fonts.title900,
                }
            }}>
                <Stack.Screen name="Home" component={Home} options={{
                    headerRight: () => <Icon name="aperture" color="white" size={35}/>,
                    headerRightContainerStyle: {
                        marginRight: 20
                    }
                }}/>
                <Stack.Screen name="ProductDetail" component={ProductDetail}/>
                <Stack.Screen name="RegisterProduct" component={RegisterProduct} options={{
                    headerTitle: 'Cadastrar produto'
                }}/>
                <Stack.Screen name="ShareCode" component={ShareCode} options={{
                    headerTitle: 'Compartilhar código'
                }}/>
            </Stack.Navigator>
        </>
    )
}