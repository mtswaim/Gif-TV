import React from 'react'
import { Link } from "react-router-dom";
import BetterTV from '../BetterTV.png'

export default function Gif(props) {
  return (
    <div className="Gif">
      <img src={BetterTV} id="TV" />
      <img src={props.gif} id="picture" />
    </div >
  )
} 
