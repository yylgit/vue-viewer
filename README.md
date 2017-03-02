# Install

```
npm install vue-viewer  --save
```
仓库地址： ssh://git@github.com:yylgit/vue-viewer.git

# API

```
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
}
```
# Usage
```
<template>
    <div>
      <viewer v-model="showImage" :src="imageSrc">
      </viewer>
      <el-button  @click="showImageClick">显示</el-button>
    </div>
</template>

<script type="text/babel">
  import Viewer from '../dist/vue-viewer';
    export default {
      data: function() {
        return {
          showImage: false,
          imageSrc: 'http://p0.meituan.net/qcs/4662a009da0eafd379f3172a524127e1120196.jpg'
        }
      },
      components: {
        Viewer
      },
      methods: {
        showImageClick () {
          this.showImage = true;
        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>    
</style>


```
# ScreenShot
![image description](http://p1.meituan.net/shangchao/eb1892b6ce5f4f1c9b49a3eeb42ecbea.jpg)