import styled from 'styled-components';

const feedbackRate = p => {
  const rate = Number(p.children[4].props.$percentage).toFixed(0);
  if(rate > 50) {
    return `rgba(0, 128, 0, 0.${rate - 40})`
  }
  else {
    return `rgba(180, 0, 0, 0.${-rate + 60})`
  }
};

export const List = styled.ul`
  & > li:nth-child(odd) {
    color: ${p => {
      return p.theme.mainColor;
    }};
    background-color: ${p => {
      return p.theme.accentGreen;
    }};
  }
  & > li:nth-child(even) {
    color: ${p => {
      return p.theme.mainColor;
    }};
    background-color: ${p => {
      return p.theme.buttonColor;
    }};
  }
  & > li:nth-child(5) {
    color: ${p => {
      return p.theme.mainColor;
    }};
    background-color: ${feedbackRate};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StatItem = styled.li`
  width: 250px;
  padding: 10px 20px;
  border-radius: 20px;
`;
