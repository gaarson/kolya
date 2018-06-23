import { observable, action, runInAction } from 'mobx';
import history from 'utils/history';
import { login } from 'api/auth';

class Auth {
  constructor() {
    this.Authorize = this.Authorize.bind(this);
  }

  @observable user: Object = {};
  @observable
  auth: { username: string, password: string } = {
    username: '',
    password: '',
  };
  @observable
  error: { message: string, error: Object } = {
    message: '',
    error: {},
  };

  @action setPassword(value) {
    this.auth.password = value;
  }
  @action setUsername(value) {
    this.auth.username = value;
  }

  @action
  async Authorize() {
    try {
      const { body } = await login(this.auth);

      localStorage.setItem('access', body.token);
      this.auth = { username: '', password: '' };
      history.push('/');
    } catch (error) {
      runInAction(() => {
        this.error = { error, message: 'Ошибка' };
      });
    }
  }
}

export default new Auth();
