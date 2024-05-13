'use client'

import React, { useState } from 'react'
import Banner from './Banner';
import Categories from './Categories';
import Deals from './Deals';
import { categories } from '../constants';
import Details from './Details';
import SearchFilter from './SearchFilter';

export default function HomeView() {
    const [view , setView] = useState(2)
  return (
    <>
      {view === 0 && (
        <>
          <Banner />
          <Categories />
          <Deals setView={setView} title="Best Deals" data={categories} />
          <Deals setView={setView} title="Best Deals" data={categories} />
        </>
      )}
      {view === 1 && <Details setView={setView} />}
      {view === 2 && <SearchFilter setView={setView} />}
    </>
  );
}
