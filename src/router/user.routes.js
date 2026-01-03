import UserLayout from '@/layouts/UserLayout.vue'

export default {
  path: '/',
  component: UserLayout,
  children: [
    { path: '', component: () => import('@/views/user/Homepage.vue') },
   { path: 'login', component: () => import('@/views/user/Login.vue') },
   { path: 'register', component: () => import('@/views/user/Register.vue') },
   { path: 'forgot-password', component: () => import('@/views/user/ForgotPassword.vue') },
   { path: 'about', component: () => import('@/views/user/About.vue') },
   { path: 'review-list', component: () => import('@/views/user/reviews/ReviewList.vue') },
   { path: 'reviews/:slug', component: () => import('@/views/user/reviews/ReviewCleanCode.vue') },

   { path: 'popular-books', component: () => import('@/views/user/PopularBooks.vue') },
   { path: 'book/:id', component: () => import('@/views/user/BookDetail.vue') },
   
   
   
   { path: 'category/programming', component: () => import("@/views/user/category/Programming.vue") },
   { path: 'category/design', component: () => import("@/views/user/category/Design.vue") },
   { path: 'category/marketing', component: () => import("@/views/user/category/Marketing.vue") },
   { path: 'category/language', component: () => import("@/views/user/category/Language.vue") },
   
  ]
}
