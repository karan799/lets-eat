import React from 'react';
import SearchOrder from '../features/order/SearchOrder';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">lets-eat</Link>
      <SearchOrder/>
      <p>hello</p>
    </div>
  );
}
