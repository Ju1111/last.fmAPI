import React, { PureComponent } from 'react'
import { getToken } from '../actions/authentication'
import { connect } from 'react-redux'

class Token extends PureComponent {

  render() {
    return(
      <div>
        <h2>
          Click the button for the first step of authentication!
        </h2>
        <button onClick={ getToken }>
          Click Me
        </button>
      </div>
    )
  }
}

export default connect(null, { getToken })(Token)
