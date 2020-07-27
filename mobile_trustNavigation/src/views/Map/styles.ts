import styled, {css} from 'styled-components/native';

interface IShowMap {
  show: boolean;
}

export const Container = styled.View`
  flex: 1;
`;
export const TextInputStyled = styled.TextInput`
  height: 50px;
  padding: 0 16px;
  background-color: #fff2;
  border: 0.5px black;
  align-items: center;
`;

export const MapContainer = styled.View<IShowMap>`
  flex: 1;
  ${(props) =>
    props.show &&
    css`
      flex: 0.8;
    `}
`;

export const MapWarning = styled.ScrollView`
  flex: 1;
`;

export const ImageWarning = styled.Image`
  height: 40px;
  width: 40px;
`;

export const ButtonWarning = styled.TouchableOpacity`
  height: 80px;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: 10px;
`;

export const ButtonCancel = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-left: 5px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  background-color: #cbd1d5;
  border: 1px solid black;
`;

export const ButtonImage = styled.Image`
  height: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 0.2;
`;

export const WhiteText = styled.Text`
  color: #fff;
`;
