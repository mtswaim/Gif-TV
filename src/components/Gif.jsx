import React from 'react'
import { Link } from "react-router-dom";

export default function Gif(props) {
  return (
    <div className="Gif">
      <img src={props.gif} />
    </div>
  )
} 
