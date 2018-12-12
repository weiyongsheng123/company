<template>
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
                    <li class="active">
                      <router-link to="/">
                        <a href="#">首页</a>
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/practise">
                        <a href="#">训练营</a>
                      </router-link>
                    </li>
                    <li class="dropdown">
                        <router-link to="/openclass">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                             公开课 <b class="caret"></b>
                          </a>
                        </router-link>
                        <ul class="dropdown-menu">
                            <li><a href="#">大数据</a></li>
                            <li class="divider"></li>
                            <li><a href="#">前端开发</a></li>
                            <li class="divider"></li>
                            <li><a href="#">后端开发</a></li>
                            <li class="divider"></li>
                            <li><a href="#">数据库开发</a></li>
                        </ul>
                    </li>
                    <li>
                       <router-link to="/openclass">
                          <a href="#">平头哥资讯</a>
                       </router-link>
                    </li>
                    <li class="dropdown">
                      <router-link to="/recruit">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            招聘信息 <b class="caret"></b>
                        </a>
                      </router-link>
                        <ul class="dropdown-menu">
                            <li><a href="#">市场/企业主管</a></li>
                            <li class="divider"></li>
                            <li><a href="#">电话销售</a></li>
                            <li class="divider"></li>
                            <li><a href="#">应届生/储备人才</a></li>
                            <li class="divider"></li>
                            <li><a href="#">培训生</a></li>
                            <li class="divider"></li>
                            <li><a href="#">数据库开发(实训生)</a></li>
                            <li class="divider"></li>
                            <li><a href="#">咨询顾问</a></li>
                        </ul>
                    </li>
                    <li>
                      <router-link to="/contactus">
                        <a href="#">联系我们</a>
                      </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'headNav',
  data () {
    return {
      colors: ['red', 'green', 'yellow', 'blue']
    }
  },
  methods: {
    changeColor () {
      const index = Math.floor(Math.random()*4)
      this.$refs.color.style.color = this.colors[index]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .navbar
    margin-bottom: 0px
  .navbar-nav>li a
    color: #777
    text-decoration: none
</style>
