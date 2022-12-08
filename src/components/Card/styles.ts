import { Image, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";

export const CardContainer = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    border-radius: 20px;
    width: 100%;
    height: 400px;
    elevation: 5;
    margin-bottom: 20px;
`;

export const ImageThumbnail = styled(Image)`
    width: 100%;
    height: 80%;
`;

export const CardContent = styled(View)`
    width: 100%;
    height: 20%;
    padding: 10px 15px;
`;

export const CardTitle = styled(Text)`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.title900};
    color: ${({ theme }) => theme.colors.primary};
`;

export const CardPrice = styled(Text)`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.text700};
    color: ${({ theme }) => theme.colors.text};
`;


