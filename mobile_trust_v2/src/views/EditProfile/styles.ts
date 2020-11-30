import styled from 'styled-components/native';

export const EditBackg = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const ScrollBackg = styled.ScrollView``;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  border-width: 1px;
  border-color: #436b89;
  background-color: #cbd1d5;
  border-radius: 50px;
`;

export const Header = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const TextInputStyled = styled.TextInput`
  height: 40px;
  width: 80%;
  padding: 0 10px;
  border-radius: 8px;
  background-color: #cbd1d5;
  border: 1px solid black;
`;

export const ColumnView = styled.View`
  height: 40px;
  width: 40%;
  align-items: center;
`;

export const BtnView = styled.View`
  height: 10px;
  width: 100%;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 10px;
`;

export const StyledText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const ButtonImage = styled.Image`
  height: 40px;
  width: 40px;
`;

export const SaveButton = styled.TouchableOpacity`
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

export const ButtonBack = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #cbd1d5;
  border: 1px solid black;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 1;
`;
