import React, { useCallback } from "react";
import { Background, BackgroundGradient, ButtonText, Container, Content, Footer, GoogleIcon, IconWrapper, OauthButton, Subtitle, TextWrapper, Title } from "./styles";
import LogoImg from '../../assets/icons/logo.svg';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useAuth } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const {setUserInfo} = useAuth(); 
  const {navigate} = useNavigation();

  React.useEffect(() => {
        GoogleSignin.configure({
            webClientId: '532501489438-ct1j3n275h9ksnsn6pmt7r2g8phnih73.apps.googleusercontent.com',
        })
    },[]);

  const handleLoginGoogle = useCallback(async () => {
    const result = await GoogleSignin.signIn();
    if (result) {
      setUserInfo(result);
    }
    
  }, [])

  return (
    <Container>
        <Background />
        <BackgroundGradient>
          <Content>
            <LogoImg width={150}/>
            <Title>Suas roupas, um lugar.</Title>
            <Subtitle>A maior loja de roupas do Brasil</Subtitle>
            <Footer>
              <OauthButton onPress={() => handleLoginGoogle()}>
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