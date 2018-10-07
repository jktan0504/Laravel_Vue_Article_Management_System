import Vue from 'vue';
import router from './components/user/_router'; // UserRouter

import UserMaster from './components/user/_layouts/UserMaster.vue';

// require('./bootstrap');

window.Vue = require('vue');

/* USER */
// UserMaster
Vue.component('userMaster', UserMaster);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#user_root',
    template: `<userMaster></userMaster>`,
	componenets: { UserMaster },
    router: router,
});
