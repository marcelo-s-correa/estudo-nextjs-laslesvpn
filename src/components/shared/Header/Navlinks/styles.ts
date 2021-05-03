import styled from 'styled-components';

import {colors} from '../../../../styles/colors';

export const Container = styled.div`
    background: transparent;
    display: flex;
    flex-direction: row;

  ul {
    list-style: none;
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: ${colors.texts};  
  }

  a:hover {
      opacity: 60%;
  }

`;
