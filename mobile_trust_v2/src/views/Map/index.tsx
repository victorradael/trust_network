import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, MapEvent, Marker} from 'react-native-maps';
import 'react-native-gesture-handler';

import {
  Container,
  TextInputStyled,
  MapContainer,
  MapWarning,
  ImageWarning,
  ButtonWarning,
  ButtonCancel,
  ButtonImage,
  PrimaryBG,
  WhiteText,
} from './styles';

import transito from '../../assets/transito.png';
import policia from '../../assets/policia.png';
import acidente from '../../assets/acidente.png';
import perigo from '../../assets/perigo.png';
import sos from '../../assets/sos.png';
import interdicao from '../../assets/interdicao.png';
import close from '../../assets/close.png';
import background from '../../assets/background.png';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  MapTextInput: {
    ...StyleSheet.absoluteFillObject,
  },
});

interface CoordProps {
  coordinate: {
    latitude: null | number;
    longitude: number;
  };
}

interface IWarningPosition {
  latitude: number;
  longitude: number;
  warningType: string;
}

const Map: React.FC = () => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [warningPosition, setWarningPosition] = useState<IWarningPosition>({
    latitude: 0,
    longitude: 0,
    warningType: '',
  });

  const [showWarning, setShowWarning] = useState<boolean>(false);

  const warnings = [
    {
      nome: 'Transito',
      image: transito,
    },
    {
      nome: 'Polícia',
      image: policia,
    },
    {
      nome: 'Acidente',
      image: acidente,
    },
    {
      nome: 'Perigo',
      image: perigo,
    },
    {
      nome: 'SOS',
      image: sos,
    },
    {
      nome: 'Interdição',
      image: interdicao,
    },
  ];

  console.log(warningPosition);

  async function mostrarOMapa() {
    try {
      await geolocation.getCurrentPosition(
        (pos) => {
          console.log('======================================================');
          // console.log(pos);
          setPosition({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
        },
        (err) => {
          console.log('****************************************************');
          console.log(err.code, err.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (error) {
      console.log('+++++++++++++++++++++++++++++++++');
      console.log(error);
    }
  }

  const handleMapClick = (event: MapEvent) => {
    setWarningPosition({
      ...warningPosition,
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  useEffect(() => {
    mostrarOMapa();
  }, []);

  return (
    <Container>
      <TextInputStyled placeholder="Para Onde?" />
      {position.latitude !== 0 && (
        <MapContainer show={showWarning}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: position.latitude,
              longitude: position.longitude,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
            onPress={(e) => {
              handleMapClick(e);
              setShowWarning(true);
            }}
            // {...console.log('foi')}
          >
            <Marker
              coordinate={{
                latitude: warningPosition.latitude,
                longitude: warningPosition.longitude,
              }}
            />
          </MapView>
        </MapContainer>
      )}
      {showWarning && (
        <PrimaryBG source={background}>
          <MapWarning horizontal>
            {warnings.map((warning) => (
              <ButtonWarning
                key={warning.nome}
                onPress={() =>
                  setWarningPosition({
                    ...warningPosition,
                    warningType: warning.nome,
                  })
                }>
                <ImageWarning source={warning.image} />
                <WhiteText>{warning.nome}</WhiteText>
              </ButtonWarning>
            ))}
            <ButtonCancel onPress={() => setShowWarning(false)}>
              <ButtonImage source={close} />
            </ButtonCancel>
          </MapWarning>
        </PrimaryBG>
      )}
    </Container>
  );
};

export default Map;
