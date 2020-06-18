import styled from 'styled-components/native';

export const Header = styled.View`
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-top: 32px;
  border-width: 1px;
  border-color: red;

  border-radius: 50px;
`;

export const UserNameText = styled.Text`
  font-size: 34px;
`;

export const NavHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  width: 60%;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 16px;
  height: 100%;
`;

export const TextInputStyled = styled.TextInput`
  height: 50px;
  width: 90%;
  padding: 0 16px;
  border-radius: 8px;
  background: #f4f8f9;
  border: 1px solid black;
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
`;

export const CardImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 16px;
`;
