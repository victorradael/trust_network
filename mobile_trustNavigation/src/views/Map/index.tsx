import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native';
import geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, MapEvent, Marker} from 'react-native-maps';

import {Container, TextInputStyled} from './styles';

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

const Map: React.FC = () => {
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  console.log(selectedPosition[0]);

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
    setSelectedPosition([
      event.nativeEvent.coordinate.latitude,
      event.nativeEvent.coordinate.longitude,
    ]);
  };

  useEffect(() => {
    mostrarOMapa();
  }, []);

  return (
    <Container>
      {position.latitude !== 0 && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}
          onPress={handleMapClick}>
          <Marker
            coordinate={{
              latitude: selectedPosition[0],
              longitude: selectedPosition[1],
            }}
          />
        </MapView>
      )}
      <TextInputStyled placeholder="Para Onde?" />
    </Container>
  );
};

export default Map;
