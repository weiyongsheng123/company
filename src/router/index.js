import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'// @表示src文件夹
import Practise from '@/components/practise/Practise.vue'
import Openclass from '@/components/openclass/Openclass.vue'
import Information from '@/components/information/Information.vue'
import Recruit from '@/components/recruit/Recruit.vue'
import Contactus from '@/components/contactus/Contactus.vue'
Vue.use(Router)

export default new Router({
 routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/practise',
      name: 'Practise',
      component: Practise
    },
    {
      path: '/openclass',
      name: 'Openclass',
      component: Openclass
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/recruit',
      name: 'Recruit',
      component: Recruit
    },
    {
      path: '/contactus',
      name: 'Contactus',
      component: Contactus
    }
  ]
})
