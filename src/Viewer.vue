<template>
  <div  v-show="value">
    <div @click="bgClick" class="viewer-bg"> 
    </div>
    <img ref="targetImage" class="target-image" @load="imageLoaded"  v-bind:style="imageStyle" :src="src" alt="">
    <div class="toolbar">
      <span class="icon" @click="zoomIn">
        <i class="zoom-in"></i>
      </span>
      <span class="icon"  @click="zoomOut">
        <i class="zoom-out"></i>
      </span>
      <span class="icon" @click="oneToOne">
        <i class="one-to-one"></i>
      </span>
      <span class="icon">
        <i class="reset" @click="resetImage"></i>
      </span>
      <span class="icon" @click="RotateLeft">
        <i class="rotate-left"></i>
      </span>
      <span class="icon" @click="RotateRight">
        <i class="rotate-right"></i>
      </span>
    </div>
    <div class="viewer-tooltip" v-bind:class="{'tip-show': showTip}">
    {{parseInt(this.percent * 100)}}%
    </div>
  </div>
</template>
<script>
  export default {
    props: {
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
        canDrag: false,  //是否可以拖动，点击图片时可以拖动
        reset: false,  //是否是重置，解决点击重置时watch中的设置top和left
        pageX: -1,
        pageX: -1
      }
    },
    computed: {
      imageStyle: function () {
        return {
          width: this.width === 'auto' ? 'auto' : this.width+'px',
          height: this.height === 'auto' ? 'auto' : this.height+ 'px',
          transform: `rotate(${this.rotate}deg)`,
          transition: `all 0.5s ease`,
          top: this.top + 'px',
          left: this.left + 'px'
        }
      }
    },
    methods: {
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
        let targetImage = this.$refs.targetImage;
        this.width = this.initWidth =  targetImage.width;
        this.height = this.initHeight = targetImage.height;

        window.onresize = () => {  
           this.resetImage();  
        }  
        this.resetImage();  
        this.bindDrag();
      },
      bindDrag () {
        document.onmousedown = (e)=>{
          e.preventDefault(); //禁止图片的拖动，会不触发mouseup
          var evtobj = window.event || e
          let targetobj = evtobj.srcElement || e.target
          let targetImage = this.$refs.targetImage;
          if(targetobj === targetImage) {
            this.canDrag = true;
          }  
        }
        document.onmouseup = (e)=>{
          this.canDrag = false;
        }
        document.onmousemove = (e)=>{
        
          if(this.canDrag) {
            var event = e
            if(event.movementY && event.movementX) {
              this.top += event.movementY;
              this.left += event.movementX;
            } else {
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
            
            
          }
           
        }
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
      bgClick () {
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
    .viewer-bg {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      overflow: auto;
      margin: 0;
      background-color: rgba(0,0,0,0.2);
      z-index: 1000;
    }
    .target-image {
      z-index: 1001;
      position: fixed;
      cursor: move;
      cursor: -webkit-grab;
      cursor: grab;
    }
    .toolbar {
       position: fixed;
       z-index: 1002;
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
          }
       }
       
    }
    
    .viewer-tooltip {
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
        z-index: 1003;
        opacity: 0;
        transition: all 0.5s ease;
        &.tip-show {
          opacity: 1;
        }
    }
    
      
</style>