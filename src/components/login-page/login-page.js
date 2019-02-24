import React from 'react';
import './login-page.scss';
// import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const fnSubmit = (event) => {
    event.preventDefault();

    // console.log('fnSubmit');
  };

  const ButtonLogin = () => {
    return (
      <button>Login</button>
    );
  };

  return (
    <div className="login-page">
      LoginPage
      <div className="login-page__form">
        <form onSubmit={fnSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <ButtonLogin />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
