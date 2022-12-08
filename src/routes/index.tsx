import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoute } from "./public.routes";
import { PrivateRoute } from "./private.routes";

export function Routes() {
    const isAuth = true;

    return(
        <NavigationContainer>
            {isAuth ? <PrivateRoute /> : <PublicRoute />}
        </NavigationContainer>
    )
}