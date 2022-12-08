import { ScrollView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import styled from "styled-components";

Icon.loadFont();

export const Container = styled(ScrollView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(View)`
    padding: 20px 20px 0 20px;
`;

export const FloatingButton = styled(TouchableOpacity)`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    bottom: 20px;
    right: 20px;
    elevation: 6;
    justify-content: center;
    align-items: center;
`;

export const FloatingButtonIcon = styled(Icon).attrs({
    name: 'plus',
    color: '#fff',
    size: 30,
})``;