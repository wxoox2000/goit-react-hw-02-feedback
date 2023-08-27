import styled from 'styled-components';

export const SectionBlock = styled.section`
    h2 {
        font-size: 40px;
        margin-bottom: 20px;
        color: ${p => {
          return p.theme.khakiGreen
        }};
        text-align: center;
    }
`;