import axios from 'axios'
//import { reduxForm } from 'redux-form'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'
export const GET_EVENTS = 'GET_EVENTS'
export const PUT_EVENTS = 'PUT_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  //console.log(response)
  dispatch({ type: READ_EVENTS, response })
};

export const postEvents = value => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, value)
  dispatch({ type: CREATE_EVENTS, response })
};

export const deleteEvents = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENTS, id })
};

export const getEvents = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  //console.log(response)
  dispatch({ type: GET_EVENTS, response })
};

export const putEvents = value => async dispatch => {
  //console.log(value.id)
  const response = await axios.put(`${ROOT_URL}/events/${value.id}${QUERYSTRING}`, value)
  dispatch({ type: PUT_EVENTS, response })
};