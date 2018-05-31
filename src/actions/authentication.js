import * as request from 'superagent'
import { GET_TOKEN } from './types'

export const getToken = () => (dispatch) => {
  request
    .get(`http://www.last.fm/api/auth/?api_key=3409bf6c6a7d84e51e9362c6a3eba2e2`)
    .then(response => {
      dispatch ({
        type: GET_TOKEN,
        payload: response.body
      })
      console.log(response.body);
    })
    .catch(err => console.error(err))
}
