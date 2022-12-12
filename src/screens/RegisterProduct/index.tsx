import React, { useCallback } from "react";
import { ButtonWrapper, Container, ContainerInput, Content, InputImage, InputImageText, InputSelect, InputText, InputTitle, SubmitButton, SubmitButtonText } from "./styles";
import firestore from '@react-native-firebase/firestore';
import { Alert } from "react-native";
import RNFS from 'react-native-fs';
import {launchImageLibrary} from 'react-native-image-picker';
import { handleStoragePermission } from "../../utils/checkPermission";
import { theme } from "../../global/styles/theme";

export function RegisterProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const [photo, setPhoto] = React.useState('');
    const [category, setCategory] = React.useState<unknown>('');
    const [description, setDescription] = React.useState('');

    const handleGallery = useCallback(async () => {
    const permissionForgallery = await handleStoragePermission(
      'Para enviar arquivos de mídia, permita que o MyCloset acesse as fotos, mídias e os arquivos do seu celular.',
    );
    
    if (permissionForgallery) {
      try {
        const result = await launchImageLibrary({
          maxHeight: 200,
          maxWidth: 200,
          quality: 1,
          selectionLimit: 0,
          includeBase64: false,
          mediaType: 'photo',
        });

        if (!result?.didCancel && result?.assets && result?.assets[0]?.uri) {
            await RNFS.readFile(result.assets[0]?.uri, "base64").then(data => {
                setPhoto('data:image/png;base64,'+data);
            });
          
        }
        
      } catch (error: any) {
        console.log('error: ', error);
        
        Alert.alert(
          'Ocorreu um erro.',
          'Por favor, tente novamente',
          [
            {
              text: 'Ok',
              onPress: () => console.log('OK'),
            },
          ],
        );
      }
    }
  }, []);


    const handleRegisterProduct = useCallback(async() => {
        await firestore().collection('Clothes').add({
            name,
            price,
            photo,
            category,
            description,
            user: 'king',
        }).then(() => {
            console.log('Produto cadastrado com sucesso!');
        }).catch((error) => {
            console.log('Erro ao cadastrar produto: ', error);
        })
    }, [name, price, photo, category, description])

    return (
        <Container>
            <Content>
                <ContainerInput>
                    <InputTitle>Foto</InputTitle>
                    <InputImage onPress={handleGallery}>
                        <InputImageText>Carregar imagem</InputImageText>
                    </InputImage>
                </ContainerInput>

                <ContainerInput>
                    <InputTitle>Nome</InputTitle>
                    <InputText
                        placeholder="Ex: Camiseta Preta"
                        style={{backgroundColor: theme.colors.backgroundWhite}}
                        onChangeText={text => setName(text)}
                    />
                </ContainerInput>

                <ContainerInput>
                    <InputTitle>Categoria</InputTitle>
                    <InputSelect selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)}>
                        <InputSelect.Item label="Selecione a categoria" value="0" />
                        <InputSelect.Item label="Calça" value="Calça" />
                    </InputSelect>
                </ContainerInput>

                <ContainerInput>
                    <InputTitle>Preço</InputTitle>
                    <InputText
                        placeholder="Ex: 50,00"
                        keyboardType="numeric"
                        style={{backgroundColor: theme.colors.backgroundWhite}}
                        onChangeText={text => setPrice(Number(text))}
                    />
                </ContainerInput>

                <ContainerInput>
                    <InputTitle>Descrição</InputTitle>
                    <InputText
                        placeholder="Adicione uma descrição"
                        multiline
                        style={{backgroundColor: theme.colors.backgroundWhite}}
                        onChangeText={text => setDescription(text)}
                    />
                </ContainerInput>

                <ButtonWrapper>
                    <SubmitButton onPress={handleRegisterProduct}>
                        <SubmitButtonText>Adicionar produto</SubmitButtonText>
                    </SubmitButton>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}