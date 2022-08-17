<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:["skuImageList"],
    data(){
      return{
        currentIndex:0
      }
    },
    computed:{
      imgObj(){
        return this.skuImageList[this.currentIndex]||{}
      }
    },
    mounted(){
      this.$bus.$on('getIndex',(index)=>[
        this.currentIndex=index
      ])
    },
    methods:{
      handler(event){
        let mask =this.$refs.mask
        let big =this.$refs.big
        //offsetX:鼠标坐标到元素的左侧的距离(这个事件是绑定在这个框里的，所以event.offsetX就是鼠标坐标到框左边的距离)
        let left=event.offsetX-mask.offsetWidth/2
        let top=event.offsetY-mask.offsetHeight/2
        //修改元素的属性值
        if(left<=0)left=0
        if(left>mask.offsetWidth) left=mask.offsetWidth
        if(top<=0)top=0
        if(top>=mask.offsetHeight)top=mask.offsetHeight
        mask.style.left=left+'px'
        mask.style.top=top+'px'
        //鼠标从左往右移动，大图肯定是右向左呈现
        //鼠标往小图左下角移动，就是大图往右上角移动
        big.style.left=-2*left+'px'
        big.style.top=-2*top+'px'
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>