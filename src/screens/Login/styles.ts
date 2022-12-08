import { Image, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components";


export const Container = styled(View)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
`

export const Background = styled(Image).attrs({
    source: require('../../assets/images/background-login.jpeg'),
})`
    position: absolute;
    height: 100%;
    width: 100%;
`;

export const BackgroundGradient = styled(LinearGradient).attrs({
    colors: ['rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
})`
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
`;

export const Content = styled(View)`
    padding: 50px 20px 0 20px;
`;

export const Title = styled(Text)`
    font-size: 50px;
    font-family: ${({ theme }) => theme.fonts.title900};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled(Text)`
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.text400};
    color: ${({ theme }) => theme.colors.textWhite};
    margin-bottom: 20px;
`;

export const Footer = styled(View)`
    align-items: center;
`;

export const OauthButton = styled(TouchableOpacity)`
    width: 80%;
    background-color: #f4f4f4;
    flex-direction: row;
    padding: 10px 20px;
    border-radius: 50px;
`;

export const IconWrapper = styled(View)`
    width: 20%;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ theme }) => theme.colors.primary}; */
`;

export const TextWrapper = styled(View)`
    width: 80%;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ theme }) => theme.colors.backgroundWhite}; */
`;

export const GoogleIcon = styled(Image).attrs({
    source: require('../../assets/images/google.png'),
})`
    width: 40px;
    height: 40px;
`;

export const ButtonText = styled(Text)`
    width: 80%;
    text-align: center;
    font-size: 17px;
    font-family: ${({ theme }) => theme.fonts.text400};
    color: ${({ theme }) => theme.colors.text};
`;