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

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: position.latitudeDelta,
          longitudeDelta: position.longitudeDelta,
        }}
      />
    </View>
  );
};

// const clickCoords = () => map.onclick.getCurrentPosition(
//   clickPos => {
//     setPosition({
//       ...position,
//       latitude: clickPos.coords.latitude,
//       longitude: clickPos.coords.longitude,
//     });
 


// getInitialState() {
//   return {
//     coordinate: new AnimatedRegion({
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//     }),
//   };
// }

// componentWillReceiveProps(nextProps) {
//   const duration = 500

//   if (this.props.coordinate !== nextProps.coordinate) {
//     if (Platform.OS === 'android') {
//       if (this.marker) {
//         this.marker._component.animateMarkerToCoordinate(
//           nextProps.coordinate,
//           duration
//         );
//       }
//     } else {
//       this.state.coordinate.timing({
//         ...nextProps.coordinate,
//         duration
//       }).start();
//     }
//   }
// }


// ----------------xxx-----------------

// render() {
//   return (
//     <MapView initialRegion={...}>
//       <MapView.Marker.Animated
//         ref={marker => { this.marker = marker }}
//         coordinate={this.state.coordinate}
//       />
//     </MapView>
//   );
// }

// const geoReferencePoint = () => {
// <MapView initialRegion={}>
// <Marker draggable
//   coordinate={}
//   onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
// />
// </MapView>
// }  -- aqui seria um marcador que pode ser reposicionado no mapa (ideia inicial)

export default Map;
