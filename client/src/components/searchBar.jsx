import React from 'react'

const SearchBar = (props) => {
  const BarStyling = { width: '20rem', background: '#F2F1F9', border: 'none', padding: '0.5rem' }
  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        props.getTemperature()
      }}>
        <input
          style={BarStyling}
          type='search'
          placeholder={props.placeholder}
          onChange={props.handleChange} //this handles the bar
        />
        <button onClick={props.getTemperature} >search</button>
      </form>

    </>
  )
}
export default SearchBar