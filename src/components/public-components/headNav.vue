<template>
  <div>
    <div class="head-nav">
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse"
                      data-target="#example-navbar-collapse">
                  <span class="sr-only">切换导航</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" ref="color"  @click="changeColor" href="#">平头哥</a>
          </div>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav">
              <li v-for="(item,key,index) in navData" :key="index" :class="item.class" @mouseover="item.ul[0] && showList()" @mouseout="item.ul[0] && hideList()">
                <router-link :to="item.path">
                  <a :href="item.link" class="dropdown-toggle" data-toggle="dropdown">
                    {{item.content}} <b v-if="item.ul[0]" @touchstart="alerta" class="caret"></b>
                  </a>
                </router-link>
                <ul class="dropdown-menu" v-if="item.ul[0]">
                  <li v-for="(items,indexx) in item.ul" :key="indexx"><a :href="items[0]">{{items[1]}}</a><hr></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="seat"></div>
  </div>
</template>

<script>
export default {
  name: 'headNav',
  props: {
    select: String
  },
  data () {
    return {
      isShow: false,
      colors: ['red', 'green', 'yellow', 'blue'],
      navData: {
        home: {
          path: '/',
          content: '首页',
          link: '#',
          class: '',
          ul: []
        },
        practise: {
          path: '/practise',
          content: '训练营',
          link: '#',
          class: '',
          ul: []
        },
        openclass: {
          path: '/openclass',
          content: '公开课',
          link: '#',
          class: 'dropdown',
          ul: [['#','大数据'], ['#','前端开发'], ['#','后端开发'], ['#','数据库开发']]
        },
        information: {
          path: '/information',
          content: '平头哥资讯',
          link: '#',
          class: '',
          ul: []
        },
        recruit: {
          path: '/recruit',
          content: '招聘信息',
          link: '#',
          class: 'dropdown',
          ul: [['#','市场/企业主管'], ['#','电话销售'], ['#','应届生/储备人才'], ['#','培训生']]
        },
        contactus: {
          path: '/contactus',
          content: '联系我们',
          link: '#',
          class: '',
          ul: []
        }
      }
    }
  },
  methods: {
    changeColor () {
      const index = Math.floor(Math.random()*4)
      this.$refs.color.style.color = this.colors[index]
    },
    showList () {
      var el = event.currentTarget.lastChild
      el.style.display = 'block'
    },
    hideList () {
      var el = event.currentTarget.lastChild
      el.style.display = 'none'
    },
    alerta () {
      var el = event.currentTarget.parentElement.parentElement.nextElementSibling
      if (this.isShow)
      {
        el.style.display = 'none'
        this.isShow = false
      }
      else
      {
        el.style.display = 'block'
        this.isShow = true
      }
    }
  },
  mounted () {
    this.navData[this.select].class ='active ' + this.navData[this.select].class
  }
}
</script>

<style lang="stylus" scoped>
  .head-nav
    position: fixed
    top: 0
    bottom: 0
    right: 0
    left: 0
    z-index: 99
    height: 50px
    .navbar
      margin-bottom: 0px
  .navbar-nav>li a
    color: #777
    text-decoration: none
  hr
    margin: 9px 0
  .seat
    width: 100%
    height: 50px
</style>
