import React from 'react'

export default (props) => {
  return (
    <div className='chatinput'>
      <input type='text' size='30' placeholder='enter message'></input>
      <input type='submit' value='Send'></input>
    </div>
  )
}
