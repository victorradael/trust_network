import styled from 'styled-components/native';

export const CardItem = styled.TouchableOpacity`
  border: 1px solid black;
  padding: 16px;
  width: 90%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
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

export const NormalText = styled.Text`
  color: #000000;
  font-size: 16px;
`;