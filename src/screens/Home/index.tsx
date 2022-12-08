import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Card } from "../../components/Card";
import { Container, Content, FloatingButton, FloatingButtonIcon } from "./styles";

export function Home() {
  const {navigate} = useNavigation();
  
  return (
    <>
      <Container>
      <Content>
        <Card title="Camiseta preta" image={require('../../assets/images/test-product.png')} price={50}/>
        <Card title="Camiseta preta" image={require('../../assets/images/test-product.png')} price={50}/>
        <Card title="Camiseta preta" image={require('../../assets/images/test-product.png')} price={50}/>
      </Content>
      
    </Container>
    <FloatingButton onPress={() => navigate('RegisterProduct')}>
        <FloatingButtonIcon />
      </FloatingButton>
    </>
  );
}
