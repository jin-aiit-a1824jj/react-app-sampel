import { combinReducers } from 'redux'
import count from './count.js'

export default combinReducers({ count })