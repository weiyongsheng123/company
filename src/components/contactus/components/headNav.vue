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
                    <li><a href="#">首页</a></li>
                    <li><a href="#">训练营</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            公开课 <b class="caret"></b>
                        </a>
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
                    <li><a href="#">平头哥资讯</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            招聘信息 <b class="caret"></b>
                        </a>
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
                    <li class="active"><a href="#">联系我们</a></li>
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
      //
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-menu__content
    top: 56px !important
  .primary
    background-color: red !important
</style>
