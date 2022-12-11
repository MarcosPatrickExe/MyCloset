import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ClothesProps } from "../Home";
import { CardDescription, CardPrice, CardTitle, CardTitleView, CardTitleWrapper, Container, Content, ImageCover, ShareIcon, ShareWrapper } from "./styles";

type PropsParams = RouteProp<{params: ClothesProps}, 'params'>;

export function ProductDetail() {
    const {setOptions, navigate} = useNavigation();
    const {params} = useRoute<PropsParams>();
    const {id, name, category, description, photo, price, user} = params;

    setOptions({
        headerTitle: category
    })

    return (
        <Container>
            <ImageCover source={{uri: photo}}/>
            <Content>
                <CardTitleView>
                    <CardTitleWrapper>
                        <CardTitle>{name}</CardTitle>
                        <CardPrice>R$ {price}</CardPrice>
                    </CardTitleWrapper>
                    <ShareWrapper>
                        <ShareIcon onPress={() => navigate('ShareCode' as never, id as never)}/>
                    </ShareWrapper>
                </CardTitleView>
                <CardDescription>{description}</CardDescription>
            </Content>
        </Container>
    );
}