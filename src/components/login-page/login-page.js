import React from 'react';
import './login-page.scss';
import FacebookLogin from 'react-facebook-login';

const LoginPage = (props) => {
  const { history } = props;

  const responseFacebook = (response) => {
    localStorage.isLogin = 'true'
    console.log(response);
    history.push('/home');
  }

  const fnSubmit = (event) => {
    event.preventDefault()
    console.log('fnSubmit')
  }

  const ButtonLogin = () => {
    return (
      <button>Login</button>
    )
  }

  return (
    <div className="login-page">
      LoginPage
      <div className="login-page__form">

        <FacebookLogin
          appId="323230384960442"
          autoLoad={true}
          fields="name,email,picture"
          onClick={ButtonLogin}
          callback={responseFacebook} 
        />
      
        { false && 
          <form onSubmit={fnSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form> 
        }
      
      </div>
    </div>
  );
}

export default LoginPage;