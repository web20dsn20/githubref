import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

const cakeContainer = (props) => {
    return (
        <div>
            <h1>No of Cakes {props.numOfCakes}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        numOfCakes : state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)
