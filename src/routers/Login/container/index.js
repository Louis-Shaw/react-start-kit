import React, { Component } from 'react'

import { message } from 'antd'
import FormBox from '../components/FormBox'
import Cookies from 'js-cookie'

import './index.less'

class Login extends Component {
    constructor() {
        super()
        
    }

    submit = (form, updateLoading) => {
        form.validateFields((err, values) => {
            if (!err) {
                updateLoading(true)
                this.timer = setTimeout(() => {
                    updateLoading(false)
                    let { userName, password } = values
                    if (userName == 'admin' && password == '123456') {
                        let message = `M&${userName}&${password}`
                        let key = 'react_starter'
                        let session = userName+password;
                        Cookies.set('JSESSIONID', session, { expires: 1, path: '/' });
                        Cookies.set('userName', userName, { expires: 1, path: '/' });
                        this.props.Store.updateName(userName)
                        this.props.history.push('/home')
                    } else {
                        message.error('账号：admin ； 密码：123456')
                    }
                }, 1500)
            }
        });
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            
            <div className='Login_wrap clear clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit}/>
                </div>
            </div>
            
        )
    }
}

export default Login