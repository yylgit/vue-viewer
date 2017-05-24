<template>
  <div  v-show="value">
    <div @click.stop="close" class="viewer-bg" :class="{'fade-in': fadeIn}" v-if="hasMask">
    </div>
    <img ref="targetImage" 
      class="target-image" 
      @load="imageLoaded"  
      :style="imageStyle"
      :class="{'fade-in': fadeIn,'image-transition': !isMove}"
      :src="src"
      @contextmenu="openMenu"
      alt="">
    <div class="toolbar">
      <span class="icon" @click.stop="zoomIn">
        <i class="zoom-in" title="放大"></i>
      </span>
      <span class="icon"  @click.stop="zoomOut">
        <i class="zoom-out" title="缩小"></i>
      </span>
      <span class="icon" @click.stop="oneToOne">
        <i class="one-to-one" title="1:1"></i>
      </span>
      <span class="icon">
        <i class="reset" @click.stop="resetImage" title="复位"></i>
      </span>
      <span class="icon" @click.stop="RotateLeft" title="左转">
        <i class="rotate-left"></i>
      </span>
      <span class="icon" @click.stop="RotateRight" title="右转">
        <i class="rotate-right"></i>
      </span>
      <span class="icon" @click.stop="close" title="关闭">
        <i class="close"></i>
      </span>
    </div>
    <div class="tooltip" :class="{'tip-show': showTip}">
      {{parseInt(this.percent * 100)}}%
    </div>
    
  </div>
</template>
<script>
  export default {
    name: 'viewer',
    props: {
      hasMask: {
        type: Boolean,
        default: true,
      },
      src: {
        type: String
      },
      alt: {
        type: String,
        default: ''
      },
      value: {
        type: Boolean,
        default: false
      },
      contextMenu: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: String,
        default: '10001'
      }
    },
    data: function () {
      return {
        rotate: 0,
        width: 'auto',
        height: 'auto',
        winHeight: 0,
        winWidth: 0,
        initWidth: 'auto',
        initHeight: 'auto',
        percent: -1, //初始的percent值为-1
        showTip: false,
        top: 0,
        left: 0,
        reset: false,  //是否是重置，解决点击重置时watch中的设置top和left
        pageX: -1,
        pageY: -1,
        fadeIn: false,
        isMove: false  //移动的时候不要transition
      }
    },
    computed: {
      imageStyle: function () {
        
        return {
          width: this.width === 'auto' ? 'auto' : this.width+'px',
          height: this.height === 'auto' ? 'auto' : this.height+ 'px',
          transform: `rotate(${this.rotate}deg)`,
          top: this.top + 'px',
          left: this.left + 'px',
          zIndex: this.zIndex,
        }
      }
    },
    watch: {
      value: function () {
        setTimeout(()=>{
          this.fadeIn = this.value
        },100)
      }
    },
    mounted () {
        this.resize = ()=>{
          this.resetImage(); 
        }
        this.addHandler(window,'resize',this.resize)
        this.bindDrag();
    },
    destroyed () {
      this.removeHandler(window,'resize',this.resize)
      this.removeHandler(document,'mousedown',this.mousedown)
      this.removeHandler(document,'mouseup',this.mouseup)
      
    },
    methods: {
      openMenu(e) {
        if (!this.contextMenu) e.preventDefault();
      },
      //计算位置和大小
      calposition(reset) {
        let oldwidth = this.width;
        let oldheight = this.height;
        this.width = this.initWidth * this.percent;
        this.height = this.initHeight * this.percent;
        //如果是初始加载和点击重置时，图片的top和left 位于window中央
        if(reset) {
          this.top = (this.winHeight - this.height)/2;
          this.left = (this.winWidth - this.width)/2;
        } else {
          //否则以当前位置为中心进行缩放
          this.top -= (this.height - oldheight)/2
          this.left -= (this.width - oldwidth)/2
        } 
        this.Tip();
      },
      Tip() {
        this.showTip = true;
        setTimeout(()=>{
          this.showTip = false;
        },1000)
      },
      oneToOne () {
        this.percent = 1;
        this.calposition();
      },
      imageLoaded () {
          //解决在ie10和ie9下有些时候通过 this.$refs.targetImage获取不到width和height的问题
          let img = document.createElement('img');
          img.src = this.src;
          this.width = this.initWidth =  img.width;
          this.height = this.initHeight = img.height;
          this.resetImage();  
      
      },
      removeHandler: function (element, type, handler) {
          if (element.removeEventListener) {
              element.removeEventListener(type, handler, false);   //标准
          } else if (element.detachEvent) {
              element.detachEvent("on" + type, handler);           //IE
          } else {
              element["on" + type] = null;                         //DOM0
          }
      },
      addHandler: function (element, type, handler) {
        if (element.addEventListener) {                         //标准绑定
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {                       //IE绑定
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;                     //DOM0级绑定
        }
      },
      bindDrag () {
        this.mousedown = (e)=>{
          //记录鼠标按下的位置，解决每次移动的闪动
          this.pageX = e.pageX;
          this.pageY = e.pageY;
          this.isMove = true;
          var evtobj = window.event || e
          let targetobj = evtobj.srcElement || e.target
          let targetImage = this.$refs.targetImage;
          if(targetobj === targetImage) {
            e.preventDefault(); //禁止图片的拖动，会不触发mouseup
            this.addHandler(document,'mousemove',this.mousemove)
          } 
        }
        this.mouseup = ()=>{
          this.isMove = false;
          this.removeHandler(document,'mousemove',this.mousemove)
        }
        this.mousemove = (e)=>{
            var event = e
            let oldPageX = this.pageX;
            let oldPageY = this.pageY;
            if(oldPageX !== -1 && oldPageY !== -1) {
            
              let moveX = event.pageX - this.pageX;
              let moveY = event.pageY - this.pageY;
              this.left += moveX;
              this.top += moveY;
            }
            this.pageX = event.pageX;
            this.pageY = event.pageY;
        }
        this.addHandler(document,'mousedown',this.mousedown)
        this.addHandler(document,'mouseup',this.mouseup)
        
      },
      getWindowSize () {
        let winWidth;
        let winHeight;
        if (window.innerWidth) {
          winWidth = window.innerWidth; 
        }
        else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth; 
        }
        // 获取窗口高度 
        if (window.innerHeight) 
        winHeight = window.innerHeight; 
        else if ((document.body) && (document.body.clientHeight)) 
        winHeight = document.body.clientHeight; 

        // 通过深入 Document 内部对 body 进行检测，获取窗口大小 
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) 
        { 
        winHeight = document.documentElement.clientHeight; 
        winWidth = document.documentElement.clientWidth; 
        } 
        this.winHeight = winHeight;
        this.winWidth = winWidth;
      },
      close () {
        this.$emit('input',false)
        this.resetImage();
      },
      zoomIn () {
        this.zoomTo(0.1)
      },
      zoomOut () {
        this.zoomTo(-0.1)
      },
      zoomTo (ratio) {
        ratio = Number(ratio);
        if (ratio < 0) {
          ratio = 1 / (1 - ratio);
        } else {
          ratio = 1 + ratio;
        }

        let percent = this.width * ratio / this.initWidth;
        percent = Math.max(0, percent);
        percent = Math.min(Math.max(percent, 0.01), 100);
        if (percent > 0.95 && percent < 1.05) {
          percent = 1;
        }

        this.percent = percent;
        this.calposition();
      },
      RotateLeft () {
        this.rotate = this.rotate - 90 
      },
      RotateRight () {
        this.rotate = this.rotate + 90 
      },
      resetImage () {
        this.getWindowSize();
        let marginHeight = 100;
        let marginWidth = 100;
        let maxImageHeight = this.winHeight - marginHeight;
        let maxImageWidth = this.winWidth - marginWidth;
        let heightPercent = 1;
        let widthPercent = 1;
        if(this.initHeight > maxImageHeight) {
          heightPercent = maxImageHeight / this.initHeight;
        }
        if(this.initWidth > maxImageWidth) {
          widthPercent = maxImageWidth / this.initWidth;
        }
        this.percent = Math.min(heightPercent,widthPercent)
        this.percent = Math.max(this.percent, 0.1)
        this.rotate = 0;
        this.calposition(true);
      }
    }
  }
</script>
<style lang="scss" scoped>
    .wrapper {
      opacity: 0;
      transition: all 0.5s ease;
      &.fade-in {
        opacity: 1;
      }
    }
    
    .viewer-bg {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      overflow: auto;
      margin: 0;
      background-color: rgba(0,0,0,0.5);
      z-index: 10000;
      opacity: 0;
      transition: all 0.5s ease;
      &.fade-in {
        opacity: 1;
      }
    }
    .target-image {
      position: fixed;
      cursor: move;
      cursor: -webkit-grab;
      cursor: grab;
      opacity: 0;
      &.fade-in {
        opacity: 1;
      }
      &.image-transition {
        transition: all 0.3s ease;
      }
    }
    .toolbar {
       position: fixed;
       z-index: 10002;
       bottom: 20px;
       left: 0px;
       right: 0px;
       text-align: center;
       .icon {
          cursor: pointer;
          display: inline-block;
          background-color: rgba(0, 0, 0, .5);
          border-radius: 50%;
          cursor: pointer;
          height: 24px;
          overflow: hidden;
          width: 24px;
          i {
            background-image: url('~images/viewer_icons.png');
            background-repeat: no-repeat;
            display: inline-block;
            height: 20px;
            width: 20px;
            margin: 2px;
            &.zoom-in {
              background-position: 0 0;
            }
            &.zoom-out {
              background-position: -20px 0;
            }
            &.one-to-one {
              background-position: -40px 0;
            }
            &.reset{
              background-position: -60px 0;
            }
            &.rotate-left{
              background-position: -140px 0;
            }
            &.rotate-right{
              background-position: -160px 0;
            }
            &.close{
              background-position: -260px 0;
            }
          }
       }
       
    }
    
    .tooltip {
        background-color: rgba(0, 0, 0, .8);
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        height: 20px;
        left: 50%;
        line-height: 20px;
        margin-left: -25px;
        margin-top: -10px;
        position: fixed;
        text-align: center;
        top: 50%;
        width: 50px;
        z-index: 10003;
        opacity: 0;
        transition: all 0.5s ease;
        &.tip-show {
          opacity: 1;
        }
    }
    
      
</style>