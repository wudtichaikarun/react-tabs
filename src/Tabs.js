
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
import classNames from 'classnames'

const tabLinkClasses = (index, activeTab) => {
  return classNames('nav-link', { active: index === activeTab })
}

const TabsComponent = ({ tabs, activeTab, onTabChange }) => (
  <div>
    <ul className='nav nav-tabs'>
      {
        tabs.map(
          ({title}, index) => <li key={index} className='nav-item'>
            <a 
              className={ tabLinkClasses(index, activeTab) } 
              onClick={ () => onTabChange(index) } > 
              {title} 
            </a>
          </li>
        )
      }
    </ul> 
    <div className='tab-content'>
      <div className='tab-pane active' >{ tabs[activeTab].content }</div>
    </div>
  </div>
)

TabsComponent.defaultProps = {
  activeTab: 0
}

export default TabsComponent 