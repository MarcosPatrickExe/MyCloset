import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    padding: 20px 60px;
`;

export const CodeImageTest = styled(Image).attrs({
    source: require('../../assets/images/test-code.png'),
})`
    
`;

export const CodeWrapper = styled(View)`
    padding: 20px;
    align-items: center;
`;

export const ShareButton = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled(Text)`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.title900};
    color: ${({ theme }) => theme.colors.textWhite};
    text-align: center;
`;