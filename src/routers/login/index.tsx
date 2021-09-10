import React from 'react'
import Login_bg from '@/static/image/login_bg.jpeg'
import style from './login.less'

function Login ():JSX.Element {
   return (
     <div>
       <img className={style['login-bg']} src={Login_bg} alt="login_bg" />
     </div>
   )
}

export default Login