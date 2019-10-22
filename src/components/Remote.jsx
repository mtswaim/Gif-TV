import React from 'react'
import RemotePic from '../Remote.png'
import Power from '../Power.png'
export default function Remote(props) {
  return (
    <div id="remote">
      <button name="Black screen" id="pwr-button" onClick={props.handleChange}><img src={Power} alt="" id="power" /></button>
      <button name="News" onClick={props.handleChange}>News</button>
      <button name="Adventure Time" onClick={props.handleChange}>AT</button>
      <button name="Sports" onClick={props.handleChange}>Sports</button>
      <button name="Dogs" onClick={props.handleChange}>Dogs</button>
      <button name="Cooking" onClick={props.handleChange}>Food</button>
      <button name="Cats" onClick={props.handleChange}>Cats</button>
      <button name="Music Video" onClick={props.handleChange}>MTV</button>
      <button id="netflix" name="The office" onClick={props.handleChange}>Netflix</button>
    </div >
  )
}