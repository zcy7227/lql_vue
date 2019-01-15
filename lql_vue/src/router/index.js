import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Regist from '@/views/regist'
import Main from '@/components/Main'
import Admin from '@/components/adminPage'
import Person from '@/components/person'
import Edit from '@/components/edit'
import Part1 from '@/components/mainShowPart1'
import Part2 from '@/components/mainShowPart2'
import Part3 from '@/components/mainShowPart3'
import Part4 from '@/components/mainShowPart4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    {
      path: '/part1',
      name: 'part1',
      component: Part1
    },
    {
      path: '/part2',
      name: 'part2',
      component: Part2
    },
    {
      path: '/part3',
      name: 'part3',
      component: Part3
    },
    {
      path: '/part4',
      name: 'part4',
      component: Part4
    }

  ]
})
