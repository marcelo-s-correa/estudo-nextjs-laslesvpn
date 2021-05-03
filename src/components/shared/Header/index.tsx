import React from 'react';
import Image from 'next/image';

import Navlinks from './Navlinks';

import { Container } from './styles';

const Header: React.FC = () => {
  return(
      <Container>
          <Image src="/logo" width={120} height={80} objectFit="fill"/>
          <Navlinks/>
      </Container>
  );
}

export default Header;