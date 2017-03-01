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

