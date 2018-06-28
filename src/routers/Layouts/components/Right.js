import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import { Tooltip } from 'antd'
import routerConfig from '@/config/routes'
import Cookies from 'js-cookie'

@withRouter
class Right extends Component {
    componentWillMount(){
        // let { userInfo,updateName } = this.props.Store
        // if (userInfo.name == '') {
        //     updateName(Cookies.get('userName'))
        // }
    }
    logout = () =>{
        this.props.logout()
    }
    render() {
        
        return (
            
                
                <div className='routeWrap'>
                        {routerConfig.map((item,i)=>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                   
                </div>
           
        )
    }
}

export default Right