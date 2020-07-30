import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #cbd1d5;
  border-radius: 50px;
  margin-top: 150px;
  margin-bottom: 20px;
`;

export const TextInputStyled = styled.TextInput`
  height: 40px;
  width: 80%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #cbd1d5;
  border: 1px solid black;
  margin-bottom: 10px;
`;

export const CreateButton = styled.TouchableOpacity`
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

export const TextStyled = styled.Text`
  color: #fff;
  font-size: 18px;
`;
