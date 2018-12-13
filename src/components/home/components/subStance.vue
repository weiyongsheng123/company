<template>
  <div>
    <h3 class="section-title text-center" style="font-weight: 600;">发现好课</h3>
    <div class="hr" style="height: 2px; margin: auto; width: 100px; background-color: rgb(46, 46, 46);"></div>
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>   
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
          <div class="item active">
              <img src="https://media-cdn.jiuzhang.com/course/course22.png" alt="First slide">
              <div class="carousel-caption">简历修改与面试技巧点拨</div>
          </div>
          <div class="item">
              <img src="https://media-cdn.jiuzhang.com/course/dp3_LkMISIN.png" alt="Second slide">
              <div class="carousel-caption">算法面试高频题班</div>
          </div>
          <div class="item">
              <img src="https://media-cdn.jiuzhang.com/course/ood_esLbSSK.png" alt="Third slide">
              <div class="carousel-caption">面向对象设计专题班</div>
          </div>
          <div class="item">
              <img src="https://media-cdn.jiuzhang.com/course/fullstack.png" alt="Third slide">
              <div class="carousel-caption">全栈开发基础项目课</div>
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
  </div>
</template>

<script>
export default {
  name: 'subStance',
  data () {
    return {
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
  .hr
    background-color: #8b617b!important
    font-weight: 400
  #myCarousel
    width: 44%
    height: 365px
    margin-left: 5%
    margin-top: 30px
    cursor: pointer
    position: relative
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
          height: 30%
          position: absolute
          left: 0
          right: 0
          bottom: 0
          background: rgba(0,0,0,.4)
          font-size: 18px
          line-height: 34px
          font-weight: 500
          user-select: none
          text-align: left
          box-sizing: border-box
</style>
