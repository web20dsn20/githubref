import { BUY_ICECREAME } from "./iceCreameTypes";


const initialState = {
    noOfIceCreams : 20
}

const iceCreameReducers = (state = initialState,action) => {
switch(action.type){
    case BUY_ICECREAME:
        return{
            ...state,noOfIceCreams:state.noOfIceCreams -1
        }
        default:return state
}
}
export default iceCreameReducers