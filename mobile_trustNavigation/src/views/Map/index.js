import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import {Container} from './styles';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

const Map = () => {
  const [position, setPosition] = useState({
    latitude: '0',
    longitude: '0',
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      console.log(pos);
      const coords = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
      console.log(coords);

      setPosition(coords);
    });
  }, []);

  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
};

export default Map;
