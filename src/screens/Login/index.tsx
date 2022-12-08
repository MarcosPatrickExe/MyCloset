import React from "react";
import { Background, BackgroundGradient, ButtonText, Container, Content, Footer, GoogleIcon, IconWrapper, OauthButton, Subtitle, TextWrapper, Title } from "./styles";
import LogoImg from '../../assets/icons/logo.svg';

export function Login() {
  return (
    <Container>
        <Background />
        <BackgroundGradient>
          <Content>
            <LogoImg width={150}/>
            <Title>Suas roupas, um lugar.</Title>
            <Subtitle>A maior loja de roupas do Brasil</Subtitle>
            <Footer>
              <OauthButton>
              <IconWrapper>
                <GoogleIcon />
              </IconWrapper>
              <TextWrapper>
                <ButtonText>Entrar com Google</ButtonText>
              </TextWrapper>
            </OauthButton>
            </Footer>
          </Content>
        </BackgroundGradient>
    </Container>
  );
}