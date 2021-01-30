import styled from 'styled-components/native';

export default styled.TouchableOpacity`
  width: ${(props) => props.width || 'auto'};
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => props.color || '#eee'};
  border-radius: 100px;
`;
