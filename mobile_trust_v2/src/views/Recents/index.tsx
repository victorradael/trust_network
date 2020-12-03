import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Location from '../../components/Location';

import {
    Container,
    BtnView,
    ButtonBack,
    ButtonImage,
    Title,
    TitleView,
    LocationView
} from './styles';

import voltar from '../../assets/voltar.png';

const Recents: React.FC = () =>{
    const navigation = useNavigation();
    const [local, setLocal] = useState();
    return (
        <>
        <Container>
            <BtnView>
                <ButtonBack onPress ={navigation.goBack}>
                    <ButtonImage source={voltar} />
                </ButtonBack>
            </BtnView>
        <TitleView>
            <Title>Recentes</Title>
        </TitleView>
        <LocationView>
            <Location></Location>
            <Location></Location>
            <Location></Location>
        </LocationView>    
        </Container>
        </>
    );
};
export default Recents