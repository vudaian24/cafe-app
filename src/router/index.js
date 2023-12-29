import { createRouter, createWebHistory } from 'vue-router'
import authGuard from '../router/protectedRouter';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    // User router
    {
      path: '/',
      component: () => import('@/layouts/users/Layout.vue'),
      children: [
        {
          path: 'home', 
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'about', 
          name: 'About',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: 'product', 
          name: 'ProductUser',
          component: () => import('@/views/ProductView.vue'),
        },
        {
          path: 'product-detail/:id', 
          name: 'ProductDetail',
          component: () => import('@/views/ProductDetailView.vue'),
        },
        {
          path: 'news-detail/:id', 
          name: 'NewsDetail',
          component: () => import('@/views/NewsDetailView.vue'),
        },
        {
          path: 'blog', 
          name: 'Blog',
          component: () => import('@/views/BlogView.vue'),
        },
      ],
    },

    // Authentication user
    {
      path: '/login',
      component: () => import('@/layouts/users/LayoutLogin.vue'),
      children: [
        {
          path: '',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
          // Khi người dùng đã đăng nhập, chuyển hướng đến trang dashboard
          beforeEnter: (to, from, next) => {
            const accessTokenAdmin = sessionStorage.getItem('accessTokenUser');
            if (accessTokenAdmin) {
              next('/home');
            } else {
              next();
            }
          },
        },
      ],
    },

    // {
    //   path: '/login',
    //   component: () => import('@/layouts/users/LayoutLogin.vue'),
    //   children: [
    //     {
    //       path: '/login', 
    //       name: 'Login',
    //       component: () => import('@/views/LoginView.vue'),
    //     },
    //   ],
    // },
    {
      path: '/register',
      component: () => import('@/layouts/users/LayoutLogin.vue'),
      children: [
        {
          path: '',
          name: 'Register',
          component: () => import('@/views/RegisterView.vue'),
          // Khi người dùng đã đăng nhập, chuyển hướng đến trang dashboard
          beforeEnter: (to, from, next) => {
            const accessTokenAdmin = sessionStorage.getItem('accessTokenUser');
            if (accessTokenAdmin) {
              next('/home');
            } else {
              next();
            }
          },
        },
      ],
    },

    //Admin router
    {
      component: () => import('@/layouts/admins/Layout.vue'),
      beforeEnter: authGuard,
      children: [
        {
          path: '/admin/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/admins/DashboardView.vue'),
        },
        {
          path: '/admin/product',
          name: 'Product',
          component: () => import('@/views/admins/ProductView.vue'),
        },
        {
          path: '/admin/employee',
          name: 'Employee',
          component: () => import('@/views/admins/EmployeeView.vue'),
        },
        {
          path: '/admin/user',
          name: 'User',
          component: () => import('@/views/admins/UserView.vue'),
        },
        {
          path: '/admin/news',
          name: 'New',
          component: () => import('@/views/admins/NewsView.vue'),
        },
        {
          path: '/admin/brand',
          name: 'Brand',
          component: () => import('@/views/admins/BrandView.vue'),
        },
        {
          path: '/admin/category',
          name: 'Category',
          component: () => import('@/views/admins/CategoryView.vue'),
        },
        {
          path: '/admin/profile',
          name: 'Profile',
          component: () => import('@/views/admins/ProfileView.vue'),
        },
      ],
    },
    {
      path: '/admin/login',
      component: () => import('@/layouts/admins/LayoutLogin.vue'),
      children: [
        {
          path: '',
          name: 'LoginAdmin',
          component: () => import('@/views/admins/LoginView.vue'),
          // Khi người dùng đã đăng nhập, chuyển hướng đến trang dashboard
          beforeEnter: (to, from, next) => {
            const accessTokenAdmin = sessionStorage.getItem('accessTokenAdmin');
            if (accessTokenAdmin) {
              next('/admin/dashboard');
            } else {
              next();
            }
          },
        },
      ],
    },

    {
      path: '/:catchAll(.*)',
      component: () => import('@/views/error/NotFoundView.vue'),
    },
  ]
});

export default router;
