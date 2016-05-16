import React from 'react'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello Word!</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
