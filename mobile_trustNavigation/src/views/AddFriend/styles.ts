import styled from 'styled-components/native';

export const Header = styled.View`
  align-items: center;
`;

export const TextBackg = styled.View`
  margin-top: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const InputBackg = styled.View`
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TextInputStyled = styled.TextInput`
  height: 40px;
  width: 80%;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #cbd1d5;
  border: 1px solid black;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  align-items: center;
  color: #fff;
`;

export const BtnView = styled.View`
  height: 1px;
  width: 100%;
  margin-left: 10px;
  margin-top: 5px;
`;

export const ButtonImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const ButtonBack = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #cbd1d5;
  border: 1px solid black;
`;

export const AddButton = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  border: 1px black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  background-color: #fff2;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 1;
`;
