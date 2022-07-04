import { Link } from '@chakra-ui/react';
import React from 'react';

const fallback = () => (
  <div style={{color:"#6d6a75",textAlign:"center"}}>
    <h1 >This is fallback page when device is offline </h1>
    <Link href="/" style={{textDecoration:"underline"}}>Click to go back to home.</Link>
  </div>
);

export default fallback;