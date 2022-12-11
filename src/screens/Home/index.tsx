import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Card } from "../../components/Card";
import { Container, Content, FloatingButton, FloatingButtonIcon } from "./styles";
import firestore from '@react-native-firebase/firestore';

export type ClothesProps = {
  id: string;
  name: string;
  price: number;
  photo: string;
  category: string;
  description: string;
  user: string;
}

export function Home() {
  const {navigate} = useNavigation();
  const [clothes, setClothes] = React.useState<ClothesProps[]>([]);

  useEffect(() => {
    (async () => {
      const clothesCollection = await firestore().collection('Clothes').get();
      const clothesReturn: ClothesProps[] = clothesCollection.docs.map(doc => {
        const {name, price, photo, category, description, user} = doc.data();
        return {
          id: doc.id,
          name,
          price,
          photo,
          category,
          description,
          user
        }
      });

      setClothes(clothesReturn);
    })()
    
  }, [])
  
  
  return (
    <>
      <Container>
      <Content>
        {
          clothes.map(clothe => (
            <Card key={clothe.id} title={clothe.name} image={{uri: clothe.photo}} price={clothe.price} onPress={() => navigate('ProductDetail' as never, clothe as never)}/>
          ))
        }
      </Content>
      
    </Container>
    <FloatingButton onPress={() => navigate('RegisterProduct' as never)}>
        <FloatingButtonIcon />
      </FloatingButton>
    </>
  );
}
