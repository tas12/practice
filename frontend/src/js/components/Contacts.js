import React from 'react'

export default (props) => {
  return (
    <div id='contacts'>
      <h2>Contacts</h2>
      <ul>
        {props.deets.map((obj, i) => {
          return <li key={i}>{obj.name} is {obj.canChat ? 'online' : 'offline'}</li>
        })}
      </ul>
    </div>
  )
}
