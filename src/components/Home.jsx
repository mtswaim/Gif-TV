import React from 'react'
import Gif from './Gif'
import Remote from './Remote'

export default function Home(props) {
  return (
    <>
      <Gif gif={props.gif} />
      <Remote handleChange={props.handleChange} handleChangeAlso={props.handleChangeAlso} />
    </>
  )
}