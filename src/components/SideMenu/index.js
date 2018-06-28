import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
import './index.less'
import menuConfig from '@/config/menu'

@withRouter
class SideMenu extends Component {
    state={
        keys:[]
    }
    selectKey = () =>{
        let keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({keys:keys})
    }
    componentWillMount(){
        this.selectKey()
    }
    onSelect = ({key}) =>{
        this.props.history.push(key)
    }
    componentWillReceiveProps (nextProps){
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey()
        }
    }
    render() {
        return (
            <div className=''>
                <Menu mode="inline" theme="dark" onSelect={this.onSelect} selectedKeys={this.state.keys}>
                    {menuConfig.map((item,i)=>
                        item.list && item.list.length > 0 ?
                            <SubMenu key={item.key} title={<span><span className={'font icon-' +item.icon}></span><span>{item.title}</span></span>}>
                                {item.list.map((listItem,ii)=>
                                    <Menu.Item key={item.key+listItem.key}>
                                        <span>{listItem.title}</span>
                                    </Menu.Item>
                                )}
                            </SubMenu>
                            :
                            <Menu.Item key={item.key}>
                                <span className={'font icon-' +item.icon}></span>
                                <span>{item.title}</span>
                            </Menu.Item>
                    )}
                </Menu>
            </div>
        )
    }
}

export default SideMenu

// {
//     key   : '/employeesManage',
//     title : '员工管理',
//     icon  : 'yuangongguanli',
//     list  : [{
//         key   : '/employeesList',
//         title : '员工列表'
//     }]
// }, {
//     key   : '/userManage',
//     title : '用户管理',
//     icon  : 'yonghu',
//     list  : [{
//         key   : '/userList',
//         title : '用户列表'
//     }, {
//         key   : '/userOrder',
//         title : '用户订单'
//     }, {
//         key   : '/userManager',
//         title : '用户管理'
//     }, {
//         key   : '/endOrder',
//         title : '结束订单'
//     }]
// }, {
{/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
<Menu.Item key="1">
  <Icon type="pie-chart" />
  <span>Option 1</span>
</Menu.Item>
<Menu.Item key="2">
  <Icon type="desktop" />
  <span>Option 2</span>
</Menu.Item>
<SubMenu
  key="sub1"
  title={<span><Icon type="user" /><span>User</span></span>}
>
  <Menu.Item key="3">Tom</Menu.Item>
  <Menu.Item key="4">Bill</Menu.Item>
  <Menu.Item key="5">Alex</Menu.Item>
</SubMenu>
<SubMenu
  key="sub2"
  title={<span><Icon type="team" /><span>Team</span></span>}
>
  <Menu.Item key="6">Team 1</Menu.Item>
  <Menu.Item key="8">Team 2</Menu.Item>
</SubMenu>
<Menu.Item key="9">
  <Icon type="file" />
  <span>File</span>
</Menu.Item>
</Menu> */}