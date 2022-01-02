import {combineReducers} from 'redux'
import CakeReducers from './cake/cakeReducers'
import IceCreameReducers from './iceCreame/iceCreameReducers'

const rootReducers = combineReducers({
    cake:CakeReducers,
    iceCreame:IceCreameReducers})

export default rootReducers