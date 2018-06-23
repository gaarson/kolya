import { observable, action } from 'mobx';
import { get } from 'api/menu';

class Menu {
  @observable dialogs = [];
  @observable
  error: { message: string, error: Object } = {
    message: '',
    error: {},
  };

  @action
  async fetchDialogs() {
    try {
      const { body } = await get();
      console.log('dialogs');
      this.dialogs = body;
    } catch (error) {
      this.error = { error, message: 'Ошибка' };
    }
  }
}

export default new Menu();
