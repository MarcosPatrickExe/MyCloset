import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const Container = styled(ScrollView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(View)`
    flex: 1;
    padding: 20px;
`;

export const ButtonWrapper = styled(View)`
    justify-content: center;
    align-items: center;
`;

export const SubmitButton = styled(TouchableOpacity)`
    width: 80%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 15px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`;

export const SubmitButtonText = styled(Text)`
    color: ${({ theme }) => theme.colors.textWhite};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.title900};
`;