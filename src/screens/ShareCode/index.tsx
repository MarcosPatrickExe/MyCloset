import React from "react";
import { ButtonText, CodeImageTest, CodeWrapper, Container, ShareButton } from "./styles";

export function ShareCode() {
  return (
    <Container>
        <CodeWrapper>
            <CodeImageTest />
        </CodeWrapper>
        <ShareButton>
            <ButtonText>Compartilhar</ButtonText>
        </ShareButton>
    </Container>
  );
}