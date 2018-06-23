import agent from 'utils/agent';

export const get = () => agent().get('/api/dialogset/');

export const end = message => agent().post('').send(message);
