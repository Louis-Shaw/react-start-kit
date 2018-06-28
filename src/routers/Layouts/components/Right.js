import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Tooltip } from 'antd'
import routerConfig from '@/config/routes'
import Cookies from 'js-cookie'
import LoadingComponented from '../../../components/DelayLoading'

function testloader (){
    return <div>test loader </div>
}

const Loaded  = Loadable({loader: ()=>import("../../ReduxCp") , loading:LoadingComponented})
                // Loadable({loader: () => import('../routers/Home'), loading : DelayLoading,delay:3000})
const Loaded2 = Loadable({loader:()=> import("../../RoleManage/RoleList") ,loading:LoadingComponented})
const Home = Loadable({loader:()=> import("../../Home") ,loading:LoadingComponented})
@withRouter
class Right extends Component {
    componentWillMount(){
        // let { userInfo,updateName } = this.props.Store
        // if (userInfo.name == '') {
        //     updateName(Cookies.get('userName'))
        // }
        routerConfig.map((item,i)=>
                        console.log(<Route key={i} path={item.path} component={item.component} exact/>)
                        )
        
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
                        
                        <Route render={() => <div>Not Found</div>} exact/>
                    
                </div>
           
        )
    }
}

export default Right