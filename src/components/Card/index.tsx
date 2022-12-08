import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageSourcePropType } from "react-native";

import { CardContainer, CardContent, CardPrice, CardTitle, ImageThumbnail } from "./styles";

type CardProps = {
    title: string;
    image: ImageSourcePropType | undefined;
    price: number;
    link?: string;
};

export function Card({title, image, price, link}: CardProps) {
    const {navigate, setOptions} = useNavigation();

  return (
    <CardContainer onPress={() => navigate('ProductDetail')}>
        <ImageThumbnail source={image} />
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardPrice>R$ {price}</CardPrice>
        </CardContent>
    </CardContainer>
  );
}