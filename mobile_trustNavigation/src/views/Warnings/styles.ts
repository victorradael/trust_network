import styled from 'styled-components/native';

export const CircleButton = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-width: 1px;
  border-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 40px;
`;

export const ButonImage = styled.Image`
  height: 80px;
  width: 80px;
  align-items: center;
  justify-content: center;
`;

export const ButonText = styled.Text`
  font-size: 24px;
`;

export const WarningBackg = styled.View`
  flex: 1;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const WarningColumn = styled.View`
  background-color: #fff;
  flex-direction: column;
  justify-content: space-evenly;
`;
