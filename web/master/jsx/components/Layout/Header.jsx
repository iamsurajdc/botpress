import React from 'react'
import pubsub from 'pubsub-js'
import HeaderRun from './Header.run'
import { NavDropdown, MenuItem } from 'react-bootstrap'

import NotificationHub from '../Notifications/Hub'

class Header extends React.Component {
  componentDidMount() {
      HeaderRun()
  }

  toggleUserblock(e) {
    e.preventDefault()
    pubsub.publish('toggleUserblock')
  }

  render() {
    const notifications = <NotificationHub skin={this.props.skin} />

    return (
    <header className="topnavbar-wrapper">
      { /* START Top Navbar */ }
      <nav role="navigation" className="navbar topnavbar">
        { /* START navbar header */ }
        <div className="navbar-header">
          <a href="/" className="navbar-brand">
            <div className="brand-logo">
              <img src="/img/logo.png" alt="App Logo" className="img-responsive" />
            </div>
          </a>
        </div>
        { /* END navbar header */ }
        { /* START Nav wrapper */ }
        <div className="nav-wrapper">
        { /* START Left navbar */ }
        <ul className="nav navbar-nav">
          <li>
            { /* Button to show/hide the sidebar on mobile. Visible on mobile only. */ }
            <a href="#" data-toggle-state="aside-toggled" data-no-persist="true" className="visible-xs sidebar-toggle">
              <em className="fa fa-navicon"></em>
            </a>
          </li>
        </ul>
        { /* END Left navbar */ }
        { /* START Right Navbar */ }
        <ul className="nav navbar-nav navbar-right">
          {notifications}
        </ul>
        { /* END Right Navbar */ }
        </div>
        { /* END Nav wrapper */ }
      </nav>
      { /* END Top Navbar */ }
    </header>
    )
  }
}

export default Header