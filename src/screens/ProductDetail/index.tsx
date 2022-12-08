import { useNavigation } from "@react-navigation/native";
import React from "react";
import { CardDescription, CardPrice, CardTitle, CardTitleView, CardTitleWrapper, Container, Content, ImageCover, ShareIcon, ShareWrapper } from "./styles";

export function ProductDetail() {
    const {setOptions, navigate} = useNavigation();

    setOptions({
        headerTitle: 'Categoria'
    })

    return (
        <Container>
            <ImageCover source={require('../../assets/images/test-product.png')}/>
            <Content>
                <CardTitleView>
                    <CardTitleWrapper>
                        <CardTitle>Camiseta branca</CardTitle>
                        <CardPrice>R$ 50</CardPrice>
                    </CardTitleWrapper>
                    <ShareWrapper>
                        <ShareIcon onPress={() => navigate('ShareCode')}/>
                    </ShareWrapper>
                </CardTitleView>
                <CardDescription>Pariatur ipsum ullamco culpa exercitation pariatur pariatur proident. In aliquip eu deserunt reprehenderit proident excepteur do culpa pariatur minim officia amet. Incididunt sit qui eiusmod Lorem proident occaecat. Ad enim non culpa mollit sunt irure amet ut. Do irure labore ex do voluptate sit elit. Dolore deserunt in in nostrud non. Nisi ullamco sunt occaecat deserunt culpa magna consequat qui nulla laboris sit sunt.</CardDescription>
            </Content>
        </Container>
    );
}