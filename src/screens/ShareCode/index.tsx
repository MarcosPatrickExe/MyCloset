import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useCallback } from "react";
import QRCode from "react-native-qrcode-svg";
import Share from 'react-native-share';
import { ButtonText, CodeWrapper, Container, ShareButton } from "./styles";

type PropsParams = RouteProp<{params: {
  id: string;
}}, 'params'>;

export function ShareCode() {
  const {params} = useRoute<PropsParams>();
  const {id} = params;

  const [data, setData] = React.useState<string>('');

  const shareCode = useCallback(async () => {
    let shareOptionsUrl = {
        title: 'My Application',
        message: `Ta aqui meu código: ${id}`,
        url: `data:image/jpeg;base64,${data}`,
        subject: 'Share information from your application'
    };
    Share.open(shareOptionsUrl);
  }, [data])
  
  return (
    <Container>
        <CodeWrapper>
            <QRCode 
              value={id}
              size={300}
              backgroundColor="#fff"
              getRef={(c) => !!c && c.toDataURL((data: string ) => {
                setData(data);
              })}
            />
        </CodeWrapper>
        <ShareButton onPress={shareCode}>
            <ButtonText>Compartilhar</ButtonText>
        </ShareButton>
    </Container>
  );
}