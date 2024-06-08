import React from 'react'
import Header from '../Header/Header'
import { HowWeWorked } from './HowWeWorked/HowWeWorked'
import { HowToBuy } from './HowToBuy/HowToBuy'
import { JoinCommunity } from './JoinCommunity/JoinCommunity'

const Owners = () => {
  return (
    <>
      <Header />
      <div>Owners</div>
      <HowWeWorked />
      <JoinCommunity />
      <HowToBuy />
    </>
  )
}

export default Owners
