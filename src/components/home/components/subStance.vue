<template>
  <div>
    <h3 class="section-title text-center">发现好课</h3>
    <div class="hr"></div>
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
          <li data-target="#myCarousel" v-for="(items,index) in classes" :key="items.Number" :data-slide-to="index" :class="index == 0 ? 'active': ''"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
          <div v-for="(items,index) in classes" :key="index" class="item" :class="index == 0 ? 'active': ''">
              <img :src="items.Src" :alt="items.Number">
              <div class="carousel-caption">{{items.Desc}}</div>
          </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- 右侧导航 -->
    <div class="lectureList">
      <v-hover v-for="(item,index) in lecture" :key="index" class="cardDetail">
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-img
            :aspect-ratio="16/9"
            :src="item.Src"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                <span>
                  <v-icon>query_builder</v-icon>&nbsp;讲座时长：{{item.timeLength}}
                </span>
                <span>
                  <v-icon>insert_invitation</v-icon>&nbsp;讲座日期：{{item.Date}}
                </span>
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text
            class="pt-4"
            style="position: relative;"
          >
            <v-btn
              absolute
              color="orange"
              class="white--text"
              fab
              large
              right
              top
            >
              <v-icon>eject</v-icon>
            </v-btn>
            <h5 class="display-1 font-weight-light orange--text mb-2">{{item.Name}}</h5>
          </v-card-text>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subStance',
  data () {
    return {
      classes: [
        {
          Number: 'First slide',
          Src: 'https://media-cdn.jiuzhang.com/course/course22.png',
          Desc: '简历修改与面试技巧点拨'
        },
        {
          Number: 'Second slide',
          Src: 'https://media-cdn.jiuzhang.com/course/dp3_LkMISIN.png',
          Desc: '算法面试高频题班'
        },
        {
          Number: 'Third slide',
          Src: 'https://media-cdn.jiuzhang.com/course/ood_esLbSSK.png',
          Desc: '面向对象设计专题班'
        },
        {
          Number: 'Fouth slide',
          Src: 'https://media-cdn.jiuzhang.com/course/fullstack.png',
          Desc: '全栈开发基础项目课'
        }
      ],
      lecture: [
        { 
          Name: '2019年初美国就业情况展望及面试准备',
          Src: 'https://media-cdn.jiuzhang.com/seminar/cover/%E5%B0%B1%E4%B8%9A1.jpg',
          timeLength: '90分钟',
          Date: '2019/1/5 下午13:00:00'
        },
        { 
          Name: '算法面试官带你剖析45分钟面试流程',
          Src: 'https://media-cdn.jiuzhang.com/seminar/cover/112_u6tJG3R.jpg',
          timeLength: '90分钟',
          Date: '2018/12/20 上午11:00:00'
        },
        { 
          Name: '零基础毕业生如何走好自己职业生涯第一步',
          Src: 'https://media-cdn.jiuzhang.com/seminar/cover/112.jpg',
          timeLength: '90分钟',
          Date: '2018/12/15 上午10:00:00'
        },
        { 
          Name: '面试大作战：拿offer前的准备工作和冲刺要点',
          Src: 'https://media-cdn.jiuzhang.com/seminar/cover/seminar1.png',
          timeLength: '90分钟',
          Date: '2018/12/6 下午15:30:00'
        }
      ]
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="stylus" scoped>
  .section-title
    color: #8b617b
    font-size: 18px
    letter-spacing: 0.14px
    font-weight: 600
  .hr
    background-color: #8b617b!important
    font-weight: 400
    height: 2px
    margin: auto
    width: 100px
    background-color: rgb(46, 46, 46)
  #myCarousel
    width: 44%
    height: 365px
    margin-left: 5%
    margin-top: 30px
    cursor: pointer
    display: inline-block
    position: relative
    .carousel-indicators
      bottom: 10px
      li
        margin: 0 10px
    .carousel-inner
      height: 100%
      .item
        width: 100%
        height: 100%
        img
          width: 100%
          height: 100%
        .carousel-caption
          width: 100%
          height: 25%
          position: absolute
          left: 0
          right: 0
          bottom: 0
          background: rgba(0,0,0,.4)
          font-size: 18px
          line-height: 34px
          font-weight: 500
          user-select: none
          text-align: center
          box-sizing: border-box
          padding-bottom: 10px
  .lectureList
    display: inline-block
    width: 50%
    height: 365px
    overflow: hidden
    .cardDetail
      float: left
      width: 40%
      height: 162px
      margin: 0 5% 35px !important
      .v-card__text
        width: 100%
        height: 40px
        padding: 0
        padding-top: 0 !important
        h5
          margin: 0
          padding: 0
          font-size: 12px !important
          font-weight: bold
          text-align: center
        .v-btn
          width: 30px
          height: 30px
      .v-responsive
        height: 122px
        .v-responsive__content
          div
            font-size: 12px !important
            display: block !important
            padding-top: 55px
            background-color: rgba(245, 124, 0, .5) !important
            span
              display: block
              height: 30px
              line-height: 30px
              vertical-align: middle
</style>
