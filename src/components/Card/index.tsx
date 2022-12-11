import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType, TouchableOpacityProps } from "react-native";

import { CardContainer, CardContent, CardPrice, CardTitle, ImageThumbnail } from "./styles";

interface CardInterfaceProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType | undefined;
  price: number;
  link?: string;
}

export function Card({title, image, price, link, ...rest}: CardInterfaceProps) {
  return (
    <CardContainer {...rest}>
        <ImageThumbnail source={image} />
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardPrice>R$ {price}</CardPrice>
        </CardContent>
    </CardContainer>
  );
}