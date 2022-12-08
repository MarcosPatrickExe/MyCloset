import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components";

Icon.loadFont();

export const Container = styled(ScrollView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const ImageCover = styled(Image)`
    width: 100%;
    height: 500px;
`;

export const Content = styled(View)`
    padding: 20px 20px 0 20px;
`;

export const CardTitleView = styled(View)`
    flex-direction: row;
    margin-bottom: 10px;
`;

export const CardTitleWrapper = styled(View)`
    width: 80%;
`;

export const ShareWrapper = styled(TouchableOpacity)`
    width: 20%;
    justify-content: center;
    align-items: flex-end;
`;

export const CardTitle = styled(Text)`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.title900};
    color: ${({ theme }) => theme.colors.primary};
`;

export const CardPrice = styled(Text)`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.text700};
    color: ${({ theme }) => theme.colors.text};
`;

export const ShareIcon = styled(Icon).attrs({
    name: 'share-2',
    color: '#EAD622',
    size: 30,
})``;

export const CardDescription = styled(Text)`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.text400};
    color: ${({ theme }) => theme.colors.text};
`;