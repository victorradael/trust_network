import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, AnimatedRegion, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

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
});

const Map = () => {
  const [position, setPosition] = useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,

  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      pos => {
        setPosition({
          ...position,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      error => {
        console.log(error);
        // Alert.alert('Houve um erro ao pegar a latitude e longitude.');
      },
    );
  }, [position]);

  useEffect(() => {
    Geolocation.onclick(
      clickPos => {
        setPosition({
          ...clickPosition,
          latitude: clickPos.coords.latitude,
          longitude: clickPos.coords.longitude,
        });
      },
      error => {
        console.log(error);
        // Alert.alert('Houve um erro ao pegar a latitude e longitude.');
      },
    );
  }, [clickPosition]);

  return (
    <View style={styles.container}>
      <MapView>
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: position.latitudeDelta,
          longitudeDelta: position.longitudeDelta,
        }}
      />
    </MapView>
  );
};

        <Marker coordinate { ...clickPosition.latitude, clickPosition,longitude}>


        </Marker>

      
    </View>
  );
};

export default Map;
