import AdminLayout from '@/layouts/AdminLayout.vue'

export default {
  path: '/admin',
  component: AdminLayout,
  meta: { requiresAdmin: true },
  children: [
    { path: 'dashboard', component: () => import('@/views/admin/Dashboard.vue') },
    { path: 'users', component: () => import('@/views/admin/Users.vue') },
    { path: 'resources', component: () => import('@/views/admin/Resources.vue') },
    { path: 'orders', component: () => import('@/views/admin/Orders.vue') }
  ]
}
