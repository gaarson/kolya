import agent from 'utils/agent';

export const get = id => agent().get(`/api/dialogs/${id}/`);

export const send = message => agent().post('').send(message);
