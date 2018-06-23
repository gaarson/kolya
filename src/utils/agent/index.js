import request from 'superagent-defaults';
import prefix from 'superagent-prefix';
import use from 'superagent-use';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

const agent = () => {
  let defaults = null;

  if (localStorage.getItem('access')) {
    defaults = request().set({
      ...headers,
      Authorization: `Token ${localStorage.getItem('access')}`,
    });
  } else {
    defaults = request().set({
      ...headers,
    });
  }

  return use(defaults).use(prefix('http://192.168.0.8:8010'));
};

export default agent;
