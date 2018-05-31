import React, { PureComponent } from 'react'
import { getToken } from '../actions/authentication'

export class Artists extends PureComponent {

  render() {
    return(
      <div>
        <h2>
          This will render an artist
        </h2>
        <button onClick={ getToken }>
          Click Me
        </button>
      </div>
    )
  }
}
