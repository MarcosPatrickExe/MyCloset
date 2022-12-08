import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components";
import {Picker} from '@react-native-picker/picker'

export const Container = styled(View)`
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