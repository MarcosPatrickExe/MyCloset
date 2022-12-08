import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoute } from "./public.routes";
import { PrivateRoute } from "./private.routes";
import { useAuth } from "../contexts/auth";

export function Routes() {
    const {signed} = useAuth();

    return(
        <NavigationContainer>
            {signed ? <PrivateRoute /> : <PublicRoute />}
        </NavigationContainer>
    )
}