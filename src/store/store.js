import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import {
  Company,
  User,
} from './models/models';

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(User);
database.register(Company);

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  modules: {},
  state: {},
  mutations: {},
  actions: {},
});

export default store;
