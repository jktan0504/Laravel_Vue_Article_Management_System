import Vue from 'vue';
import VueRouter from 'vue-router';

// components
import HomeComponent from '../pages/home/UserHomeComponent.vue';
import PostsComponent from '../pages/posts/PostsComponent.vue';
import LoginComponent from '../pages/auth/login/UserLoginComponent.vue';
import RegisterComponent from '../pages/auth/register/UserRegisterComponent.vue';

Vue.use(VueRouter);

const UserRouter = new VueRouter({
    mode: 'history',
    hashbang: false,
    history: true,
    linkActiveClass: "active",
    routes:[
        { path: '/', component: HomeComponent, name: 'user-home' },
        { path: '/login', component: LoginComponent, name: 'user-login' },
        { path: '/register', component: RegisterComponent, name: 'user-register' },
        { path: '/allposts', component: PostsComponent, name: 'all-posts' },
    ]
});

export default UserRouter
