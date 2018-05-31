import * as request from 'superagent'
import { AUTHENTICATION } from './types'

export const authenticate = () => (dispatch) => {
  request
    .get(`http://www.last.fm/api/auth/?api_key=3409bf6c6a7d84e51e9362c6a3eba2e2`)
}
