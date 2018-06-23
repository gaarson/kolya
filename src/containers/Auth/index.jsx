// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

const AuthForm = ({ Auth }: { Auth: Object }) => (
  <div className="auth-form">
    <h3> Авторизуйтесь </h3>
    <TextField
      hintText="Логин"
      value={Auth.auth.username}
      onChange={({ target }) => Auth.setUsername(target.value)}
    />
    <TextField
      hintText="Пароль"
      value={Auth.auth.password}
      onChange={({ target }) => Auth.setPassword(target.value)}
    />
    <RaisedButton
      label="Войти"
      primary="true"
      style={{ width: '40%' }}
      onClick={Auth.Authorize}
    />
    <p>{Auth.authorizationStatus}</p>
  </div>
);

export default inject('Auth')(observer(AuthForm));
