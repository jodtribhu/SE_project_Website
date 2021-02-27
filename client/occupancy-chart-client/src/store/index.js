import { createStore } from 'vuex';

import authModule from './module/auth/index.js';
import facultyModule from './module/faculty/index.js';
const store=createStore({
  modules:{
      auth:authModule,
      faculty:facultyModule
  },
});

export default store;