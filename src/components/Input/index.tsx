import React, { useState } from "react";
import { TextInputProps } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";

import {
  AlertText,
  Container,
  InputImage,
  InputImageText,
  InputSelect,
  InputText,
  InputTitle,
} from './styles';

interface InputProps extends TextInputProps {
  title: string;
  placeholder?: string;
  type?: 'number' | 'select' | 'textarea' | 'image';
  error?: string;
}

export function Input({
  title,
  placeholder,
  error,
  type,
  ...rest
}: InputProps) {
  Icon.loadFont();
  const [selectValue, setSelectValue] = useState<unknown>('');

  return (
    <Container>
      <InputTitle>{title}</InputTitle>
        {
            type === 'select' ? (
                <InputSelect selectedValue={selectValue} onValueChange={(itemValue) => setSelectValue(itemValue)}>
                    <InputSelect.Item label="Selecione a categoria" value="0" />
                    <InputSelect.Item label="Calça" value="calça" />
                </InputSelect>
            ) : type === 'image' ? (
                <InputImage>
                  <InputImageText>Carregar imagem</InputImageText>
                </InputImage>
            ) : (
                <InputText
                    placeholder={placeholder}
                    multiline={type === 'textarea'}
                    keyboardType={type === 'number' ? 'numeric' : 'default'}
                    style={{
                    borderWidth: error ? 2 : 0,
                    borderColor: error
                        ? `${theme.colors.alert}`
                        : `${theme.colors.backgroundWhite}`,
                    }}
                />
            )
        }
      <AlertText>{error || " "}</AlertText>
    </Container>
  );
}