import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Tooltip ,Button} from 'antd';
import SideMenu from '@/components/SideMenu';
import Right from '../components/Right'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Layouts extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  logout(){
      console.log("logout")
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <SideMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0,textAlign:"right" }}>
                <Tooltip title={<span style={{fontSize:'14px',cursor:'pointer' }}>退出</span>}>
                    <Button onClick={this.logout} style={{marginRight:"30px"}} className='name'>logout</Button>
                </Tooltip>
          </Header>
          <Content style={{ margin: '0 16px' }}>
                <Right />

          </Content>
          
        </Layout>
      </Layout>
    );
  }
}

export default Layouts