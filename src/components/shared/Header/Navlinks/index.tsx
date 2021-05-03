import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

const options = [
    {
        label: "Sobre",
        url: ""
    },
    {
        label: "Features",
        url: ""
    },
    {
        label: "Preços",
        url: ""
    },
    {
        label: "Testemunhos",
        url: ""
    },
    {
        label: "Ajuda",
        url: ""
    }
]
   

const Navlinks: React.FC = () => {
  return(
      <Container>
          <header>
             {
                 options.map(items=>(
                     <ul>
                         <li>
                             <Link href={items.url}>
                                 <a>{items.label}</a>
                             </Link>
                         </li>
                     </ul>
                 ))
             }
          </header>
      </Container>
  )
}

export default Navlinks;