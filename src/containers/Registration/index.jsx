// @flow
import React from 'react';
import { inject, observer } from 'mobx-react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './style.css';

const RegistationForm = ({ Registration }: { Registration: Object }) => (
  <div className="registration-form">
    <h3> Регистрация </h3>
    <TextField
      hintText="Никнейм"
      value={Registration.username}
    />
    <TextField
      hintText="Пароль"
      value={Registration.password}
    />
    <TextField
      hintText="Повторите пароль"
      value={Registration.password}
    />
    <RaisedButton
      label="Регистрация"
      primary="true"
      style={{ width: '40%' }}
    />
  </div>
);

export default inject('Registration')(observer(RegistationForm));
