import { Model } from '@vuex-orm/core';
import { User } from './models';

export class Company extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'companies';

  static fields() {
    return {
      account_manager: this.belongsTo(User, 'account_manager_id'),
    };
  }
}

export default Company;
