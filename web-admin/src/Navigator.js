import React, { Component } from "react";
import LoginNavbar from './loginPages/LoginNavbar';
import { connect } from 'react-redux';

class Navigator extends Component {
    _navigatorComponent() {
        if(this.props.token === undefined){
            return (<LoginNavbar/ >)
        } else {
            return (<h1>Barra lateral header</h1>)
        }
    }

    render() {
        let navigatorComponent = this._navigatorComponent()
        return (
            navigatorComponent
        )
    }
}

const mapStateToProps = (state) => {
    return {token: state.simpleReducer.token}
}

const NavigatorContainer = connect(mapStateToProps, )(Navigator)

export default NavigatorContainer;