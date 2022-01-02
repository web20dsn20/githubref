import React from 'react'
import {buyIcecreame} from '../redux'
import { connect } from 'react-redux'

const iceCreameContainer = (props) => {
    return (
        <div>
            <h1>No Of IceCreams {props.noOfIceCreams}</h1>
            <button onClick={props.buyIcecreame}>Buy IceCreame</button>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        noOfIceCreams : state.iceCreame.noOfIceCreams
    }
}
const mapDispatchToProps = dispatch => {
    return{
        buyIcecreame : ()=> dispatch(buyIcecreame())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreameContainer)
