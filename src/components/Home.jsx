import React from 'react'
import Gif from './Gif'
import Remote from './Remote'
import BetterTV from '../BetterTV.png'

export default function Home(props) {
  return (
    <>
      <Gif gif={props.gif} />
      <Remote handleChange={props.handleChange} />
    </>
  )
}