import React from 'react';

import { 
    CardItem,
    CardImage,
    NormalText } from './styles';

import local from '../../assets/local.png';

import {View} from 'react-native';

const Button: React.FC = () => {
  return (
    <CardItem>
        <CardImage source={local} />
            <View>
                <NormalText>Rua: Doutor Zebral</NormalText>
                <NormalText>Bairro: Museu</NormalText>
                <NormalText>Cidade: Conselheiro Lafaiete</NormalText>
                <NormalText>Nº: 386 </NormalText>
            </View>
    </CardItem>
  );
};

export default Button;