import { READ_EVENTS, DELETE_EVENTS, GET_EVENTS, PUT_EVENTS, CREATE_EVENTS} from '../actions'
import _ from 'lodash'

export default (event = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      //console.log(action.response.data);
      //console.log(_.mapKeys(action.response.data, 'id'));
      return _.mapKeys(action.response.data, 'id');
    case DELETE_EVENTS:
      //console.log(action.id);
      delete event[action.id];
      return { ...event };
    case CREATE_EVENTS:
    case PUT_EVENTS:
    case GET_EVENTS:
      //console.log(action.response.data);
      const data = action.response.data;
      return { ...event, [data.id]: data };
    default:
      return event;
  }
}