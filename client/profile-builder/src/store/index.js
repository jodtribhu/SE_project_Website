import { createStore } from 'vuex';

import authModule from './module/auth/index.js';
import facultyModule from './module/faculty/index.js';
import studentModule from './module/student/index.js';
import forgetRequestModule from './module/forgetrequests/index.js';
import facultyProfileModule from './module/facultyprofile/index.js';

const store=createStore({
  modules:{
      auth:authModule,
      faculty:facultyModule,
      student:studentModule,
      forgetrequest:forgetRequestModule,
      facultyprofile:facultyProfileModule
  },
});

export default store;