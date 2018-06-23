import { observable, action } from 'mobx';
import { get } from 'api/dialog';

class Dialog {
  @observable messages = [
    {
      id: 0,
      text: 'fwqfqwfwqfwqfqwfwq',
      user: 'rus',
      dialog: 4,
      date: new Date(),
    },
    {
      id: 1,
      text: 'fwqfqwfwqfwqfqwfwqsfasqsfafasf',
      user: 'rus',
      dialog: 4,
      date: new Date(),
    },
    {
      id: 2,
      text: 'fwqfqwqsfa',
      user: 'rus',
      dialog: 4,
      date: new Date(),
    },
  ];

  @observable
  error: { message: string, error: Object } = {
    message: '',
    error: {},
  };

  @observable newMessage = '';

  @action
  setMessageText(value) {
    this.newMessage = value;
  }

  @action
  async sendMessage() {
    try {
      this.messages = [];
    } catch (error) {
      this.error = { error, message: 'Ошибка' };
    }
  }

  @action
  async fetchMessages() {
    try {
      const { body } = await get('4');
      console.log('messages', body);
      this.messages = body.Messages;
    } catch (error) {
      this.error = { error, message: 'Ошибка' };
    }
  }
}

export default new Dialog();
