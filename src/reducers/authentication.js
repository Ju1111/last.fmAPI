import { GET_TOKEN } from '../actions/types'

export default function (state = '', { type, payload }) {
  switch (type){
    case GET_TOKEN:
      return payload

    default:
      return state
  }
}
