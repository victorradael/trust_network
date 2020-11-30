import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    Cards,
    CircleButton,
    Title,
} from './styles';

const Recents: React.FC = () =>{
    const navigation = useNavigation();
    const [local, setLocal] = useState();
    return (
        <>
        <Container>
            <View>
                <CircleButton></CircleButton>
            </View>
            <View>
                <Title>Recentes</Title>
            </View>
            <View>
                <Cards></Cards>
            </View>
        </Container>
        </>
    );
};
export default Recents