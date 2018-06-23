import agent from 'utils/agent';

export const login = data => agent().post('/tokenauth/').send(data);

export const logout = () => agent().get('/logout');
