import React from 'react'
import Sidebar from './Sidebar';

import '../scss/styles.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
     <React.Fragment>
       <Sidebar />
       <section>
          {children}
       </section>
     </React.Fragment>
    )
  }
}

export default Layout
