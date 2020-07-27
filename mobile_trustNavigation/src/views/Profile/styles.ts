import styled from 'styled-components/native';

export const Header = styled.View`
  align-items: center;
  width: 100%;
`;

export const TestHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const NavHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  width: 40%;
  border: 1px black;
  border-radius: 10px;
  padding: 3px;
  background-color: #fff2;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  border-width: 1px;
  border-color: #436b89;
  background-color: #cbd1d5;
  border-radius: 50px;
`;

export const UserNameText = styled.Text`
  font-size: 34px;
  color: #fff;
`;

export const NormalText = styled.Text`
  color: #fff;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 10px;
  height: 100%;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 1;
`;

export const TextInputStyled = styled.TextInput`
  height: 50px;
  width: 90%;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #cbd1d5;
`;

export const CardItem = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 16px;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  border-radius: 8px;
  align-items: center;
  background-color: #fff2;
  border: 1px black;
`;

export const CardImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 16px;
`;

export const CircleButton = styled.TouchableOpacity`
  margin-top: 5px;
  margin-left: 20px;
  height: 40px;
  width: 40px;
  border-width: 1px;
  border-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #cbd1d5;

  border-radius: 20px;
`;

export const ButonImage = styled.Image`
  height: 39px;
  width: 39px;
  align-items: center;
  justify-content: center;
`;

export const ButonHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 97%;
`;
