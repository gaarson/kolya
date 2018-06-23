// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './style.css';

const MessageForm = ({ textMessage, send }: { textMessage: string, send: Function }) => (
  <div className="message-form">
    <textarea>
      {textMessage}
    </textarea>
    <Button
      onClick={() => send()}
      variant="contained"
      color="primary"
    >
      Send
      <Icon>Отправить</Icon>
    </Button>
  </div>
);

export default MessageForm;
