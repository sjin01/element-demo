import Vue from 'vue'
import routes from './routes'
import ElementUI from 'element-ui'
//import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-default/index.css'

import VueResource from 'vue-resource'


Vue.use(ElementUI);
Vue.use(VueResource);

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
          ? require('./pages/' + matchingView + '.vue')
          : require('./pages/404.vue')
    }
  },
  // render: h => h(this.ViewComponent)
  render (h) {
    return h(this.ViewComponent)
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});