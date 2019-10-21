import React from 'react'

export default function Remote(props) {
  return (
    <div id="remote">
      <button name="News" onClick={props.handleChange}>News</button>
      <button name="Weather" onClick={props.handleChange}>Weather</button>
      <button name="Sports" onClick={props.handleChange}>Sports</button>
      <button name="Dogs" onClick={props.handleChange}>Dogs</button>
      <button name="Cooking" onClick={props.handleChange}>Food</button>
      <button name="Cats" onClick={props.handleChange}>Cats</button>
      <button name="Music Video" onClick={props.handleChange}>MTV</button>
      <button></button>
    </div>
  )
}