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
   { path: 'new-documents', component: () => import('@/views/user/NewDocuments.vue') },
   { path: 'popular-documents', component: () => import('@/views/user/PopularDocuments.vue') },
   { path: 'document-detail', component: () => import('@/views/user/DocumentDetail.vue') },
   { path: 'check-out', component: () => import('@/views/user/Checkout.vue') },
   { path: 'my-oders', component: () => import('@/views/user/MyOders.vue') },
   { path: 'payment-success', component: () => import('@/views/user/PaymentSuccess.vue') },
   {
  path: '/category/programming',
  component: () => import("@/views/user/category/Programming.vue"),
},
{
  path: '/category/design',
  component: () => import("@/views/user/category/Design.vue"),
},
{
  path: '/category/marketing',
  component: () => import("@/views/user/category/Marketing.vue"),
},
{
  path: '/category/language',
  component: () => import("@/views/user/category/Language.vue"),
},

  //  { path: 'products', component: () => import('@/views/user/Products.vue') },
   { path: 'cart', component: () => import('@/views/user/Cart.vue') }
  ]
}
