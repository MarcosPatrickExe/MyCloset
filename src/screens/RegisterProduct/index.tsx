import React from "react";
import { Input } from "../../components/Input";
import { ButtonWrapper, Container, Content, SubmitButton, SubmitButtonText } from "./styles";

export function RegisterProduct() {
    return (
        <Container>
            <Content>
                <Input title="Foto" type="image"/>
                <Input title="Nome" placeholder="Ex: Camiseta Preta" />
                <Input title="Categoria"  type="select"/>
                <Input title="Custo" type="number"/>
                <Input title="Descrição" type="textarea"/>
                <ButtonWrapper>
                    <SubmitButton>
                        <SubmitButtonText>Adicionar produto</SubmitButtonText>
                    </SubmitButton>
                </ButtonWrapper>
            </Content>
        </Container>
    )
}