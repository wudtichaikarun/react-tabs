import React, { Component } from 'react'
import Tabs from './Tabs'

class App extends Component {
  tabs = [
    {
      title: 'Tab#1',
      content: 'Content#1'
    },
    {
      title: 'Tab#2',
      content: 'Content#2'
    },
    {
      title: 'Tab#3',
      content: 'Content#3'
    }
  ]

  render() {
    return (
     <div className='container mt-2'>
      <Tabs tabs={this.tabs} />
     </div>
    )
  }

}

export default App;
