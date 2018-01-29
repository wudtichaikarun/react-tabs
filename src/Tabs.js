
/*
import React, { Component } from 'react'

export default class TabsComponent extends Component {
  static defaultProps = {
    activeTab: 0
  }
 
  tabLinkClasses = index => (
    index === this.props.activeTab ? 'nav-link active' : 'nav-link'
  )

  render() {
    return (
      <ul className='nav nav-tabs'>
        {
          this.props.tabs.map(
            ({title}, index) => <li key={index} className='nav-item'>
              <a className={this.tabLinkClasses(index)} > {title} </a>
            </li>
          )
        }
      </ul>
    )
  }

}
*/

import React from 'react'

const tabLinkClasses = (index, activeTab) => {
  return index === activeTab ? 'nav-link active' : 'nav-link'
}

const TabsComponent = ({ tabs, activeTab }) => (
  <ul className='nav nav-tabs'>
    {
      tabs.map(
        ({title}, index) => <li key={index} className='nav-item'>
          <a className={tabLinkClasses(index, activeTab)} > {title} </a>
        </li>
      )
    }
  </ul> 
)

TabsComponent.defaultProps = {
  activeTab: 0
}

export default TabsComponent 