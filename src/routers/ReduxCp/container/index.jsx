import React ,{Component } from 'react';
import {bindActionCreators } from 'redux';
import * as actions from "@/action/userinfo";

class ReduxCp extends Component {
    constructor(props ,context){
        super(props)
    }

    render(){
        const userinfo = this.props.userinfo
        return (
            <div>
                <div> im reducx cp </div>
                <div> {this.props.userinfo.username}</div>
                <div> {this.props.userinfo.password}</div>
                <button type="button" onClick={this.props.userinfoAction.updateUserinfo}> update  </button>
            </div>
        )
    }
}

function mapStateToProps (state){
    console.log(11)
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps (dispatch){
    return {
        userinfoAction: bindActionCreators(actions , dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ReduxCp)