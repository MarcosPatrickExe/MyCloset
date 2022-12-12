import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import {Picker} from '@react-native-picker/picker'

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

export const ContainerInput = styled(View)`
  width: 100%;
  margin-bottom: 5px;
`;

export const InputTitle = styled(Text)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title900};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 5px;
`;

export const InputText = styled(TextInput).attrs({
  placeholderTextColor: "#8c8c8c",
})`
  padding: 15px 15px;
  width: 100%;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
`;

export const InputSelect = styled(Picker)`
    padding: 15px 15px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    border-radius: 10px;
    font-size: 10px; 
    font-family: ${({ theme }) => theme.fonts.text400};
    color: ${({ theme }) => theme.colors.text};
`;

export const InputImage = styled(TouchableOpacity)`
  padding: 15px 15px;
  width: 75%;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
`;

export const InputImageText = styled(Text)`
  font-size: 10px; 
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.text};  
`;

export const AlertText = styled(Text)`
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.alert};
`;