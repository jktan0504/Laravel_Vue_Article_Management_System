// User
import Vue from 'vue';

import AdminMaster from './components/admin/_layouts/AdminMaster.vue';


// Apply axios
window.Vue = require('vue');

/* Admin */
// UserMaster
Vue.component('adminMaster', AdminMaster);

const app = new Vue({
	el: '#admin',
	template: `<adminMaster></adminMaster>`,
	componenets: { AdminMaster },
});
