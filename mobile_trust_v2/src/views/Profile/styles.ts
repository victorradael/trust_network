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
  background-color: #000000;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 10px;
  border-width: 2px;
  border-color: #000000;
  background-color: #f4ede8;
  border-radius: 50px;
`;

export const UserNameText = styled.Text`
  font-size: 34px;
  color: #FFFFFF;
`;

export const NormalText = styled.Text`
  color: #000000;
  font-size: 16px;
`;

export const NavHeaderText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 10px;
  height: 100%;
`;

export const PrimaryBG = styled.ImageBackground`
  flex: 1;
  background: #AF0000;
`;

export const TextInputStyled = styled.TextInput`
  height: 50px;
  width: 90%;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #f4ede8;
`;

export const CardItem = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 16px;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  border-radius: 8px;
  align-items: center;
  background-color: #f4ede8;
  border: 2px black;
`;

export const CardImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 16px;
`;

export const AddCircleButton = styled.TouchableOpacity`
  margin-top: 24px;
  margin-right: 24px;
  height: 48px;
  width: 48px;
  border-width: 2px;
  border-color: #000000;
  background-color: #f4ede8;
  border-radius: 24px;
`;

export const EditCircleButton = styled.TouchableOpacity`
  margin-top: 24px;
  margin-left: 24px;
  height: 48px;
  width: 48px;
  border-width: 2px;
  border-color: #000000;
  background-color: #f4ede8;
  border-radius: 24px;
`;

export const ButonImage = styled.Image`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButonHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CircleButtonView = styled.View`
  height: 75px;
  width: 100%;
  background-color: #AF0000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

