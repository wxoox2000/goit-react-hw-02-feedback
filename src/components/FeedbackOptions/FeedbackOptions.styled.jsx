import styled from 'styled-components';

const hoverColor = p => {
  switch (p.id) {
    case 'good':
      return 'green';
    case 'neutral':
      return p.theme.buttonColor;
    case 'bad':
      return 'red'
    default:
      return null;
  }
};

export const List = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
`;

export const Option = styled.button`
  font-size: 18px;
  padding: 10px 15px;
  border: 2px solid
    ${p => {
      return p.theme.khakiGreen;
    }};
  border-radius: 10px;
  color: ${p => {
    return p.theme.mainColor;
  }};
  background-color: ${p => {
    return p.theme.accentGreen;
  }};
  transition: background-color ${p => p.theme.trans},
    color ${p => p.theme.trans};
  cursor: pointer;
  &:hover {
    background-color: ${hoverColor};
  }
`;