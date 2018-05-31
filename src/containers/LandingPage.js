import React, { PureComponent } from 'react'
import Token from '../components/Artists'
import './LandingPage.css'

export class Welcome extends PureComponent {

  render() {
    return(
      <div class="indexPage">
        <h2>
          Music is the language of the soul...
        </h2>
        <h4>
          And here is the music that moved me this week
        </h4>
        <Token />
      </div>
    )
  }
}
