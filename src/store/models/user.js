import { Model } from '@vuex-orm/core';
import { Company } from './models';

export class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users';

  static fields() {
    return {
      company: this.belongsTo(Company, 'company_id'),
    };
  }
}

export default User;
