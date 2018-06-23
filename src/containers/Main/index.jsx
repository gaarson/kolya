import React from 'react';
import { inject, observer } from 'mobx-react';

import Sidebar from 'containers/Sidebar';
import MessageForm from 'components/MessageForm';
import Message from 'components/Message';

import './style.css';

@inject('Dialog')
@observer
class Main extends React.Component<{ Dialog: Object }> {
  componentDidMount() {
    this.props.Dialog.fetchMessages();
  }

  render() {
    const { Dialog } = this.props;

    return (
      <div className="main">
        <Sidebar />
        <div className="messages-block">
          {
            Dialog.messages.map(message =>
              <Message text={message.text} img={message.img} />)
          }
          <hr />
          <MessageForm />
        </div>
      </div>
    );
  }
}

export default Main;
