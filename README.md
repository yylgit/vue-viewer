# Install

```
mnpm install @scfe/vue-select  --save
```
仓库地址： ssh://git@git.sankuai.com/scfe/vue-select.git

# API

Props |Type|Default | Description
---|---|---|---
options | Array| [] | {label: '',name: ''} 的数组
value | Array or String |[]|  选中的值
placeholder | String | '-请选择-'| placeholder
multiple | Boolean | false | 是否可以多选 
search | Boolean | false|  是否可以搜索
limit | Number |  1024| 多选是限制最大数目
closeOnSelect | Boolean | false | 选择时是否关闭下拉框
disabled | Boolean |  false | 是否禁用
canAllSelect | Boolean |  false | 是否启用全选功能
isAjaxOption | Boolean |  false | 是否启用ajax功能
fetchOption | Function |  ()=>{} | 在搜索框keyup事件后调用该函数，可以在该函数做ajax请求并重置options
isAjaxPending | Boolean | false | 是否处于重新加载数据状态
keyUpDebounce | Number | 300 | keyUp时触发fetchOption的延时毫秒数
itemClick | Function | ()=>{} | 点击选择项触发的回调事件
clearButton | Boolean | false | 是否显示清除按钮
# Usage
```
<template>
    <div class="form-inline">
      <div class="col-xs-6">
        <h1>basic select</h1>
        <doc-code language="javascript">
              <m-select placeholder="请选择城市" 
              :value.sync="selectedCity1" 
              :options="cityOptions1"
              close-on-select="true" 
              clear-button="true">
              </m-select>
          </doc-code>
        <m-select placeholder="请选择城市" 
          :value.sync="selectedCity1" 
          :options="cityOptions1"
          close-on-select="true" 
          clear-button="true">
          </m-select>
      </div>
      <div class="col-xs-6">
        <h1>search select</h1>
        <doc-code language="javascript">
              <m-select placeholder="请选择城市" 
                :value.sync="selectedCity2" 
                :options="cityOptions2"
            close-on-select="true" 
            search="true" 
            clear-button="true">
            </m-select>
          </doc-code>
        <m-select placeholder="请选择城市" 
              :value.sync="selectedCity2" 
              :options="cityOptions2"
          close-on-select="true" 
          search="true" 
          clear-button="true">
          </m-select>
      </div>
    </div>
    <div class="form-inline">
      <div class="col-xs-6">
        <h1>multiple select and search</h1>
        <doc-code language="javascript">
              <m-select placeholder="请选择城市" 
              :value.sync="selectedCity3" 
              :options="cityOptions3"
              close-on-select="false" 
              multiple="true"
              clear-button="true">
              </m-select>
          </doc-code>
        <m-select placeholder="请选择城市" 
          :value.sync="selectedCity3" 
          :options="cityOptions3"
          close-on-select="false"
          search="true" 
            multiple="true" 
          clear-button="true">
          </m-select>
      </div>
      <div class="col-xs-6">
        <h1>can all select and limit</h1>
        <doc-code language="javascript">
              <m-select placeholder="请选择城市" 
                :value.sync="selectedCity4" 
                :options="cityOptions4"
            close-on-select="true" 
            search="true" 
            clear-button="true">
            </m-select>
          </doc-code>
        <m-select placeholder="请选择城市" 
              :value.sync="selectedCity4" 
              :options="cityOptions4"
          close-on-select="false" 
          search="true" 
          clear-button="true"
          multiple="true"
          can-all-select="true"
          :limit="5">
          </m-select>
      </div>
    </div>
    <div class="form-inline">
      <div class="col-xs-6">
        <h1>ajax select</h1>
        <doc-code language="javascript">
              <m-select placeholder="请选择城市" 
            :value.sync="selectedCity5" 
            :options="cityOptions5"
            close-on-select="false"
            search="true" 
              multiple="false" 
            clear-button="true"
            is-ajax-option="true"
            :fetch-option="fetchOption"
            :is-ajax-pending="pending">
            </m-select>
          </doc-code>
        <m-select placeholder="请选择城市" 
          :value.sync="selectedCity5" 
          :options="cityOptions5"
          close-on-select="false"
          search="true" 
            multiple="false" 
          clear-button="true"
          is-ajax-option="true"
          :fetch-option="fetchOption"
          :is-ajax-pending="pending">
          </m-select>
      </div>
      <div class="col-xs-6">
        
      </div>
    </div>
</template>
<style>
</style>
<script>
  import MSelect from '@scfe/vue-select';
  import docCode from './utils/docCode.vue';

  const CityJSON = require('./city.json');
  export default {
    components: {
      MSelect,
      docCode
    },
    data() {
      return {
        selectedCity1: [],
        cityOptions1: [],
        selectedCity2: [],
        cityOptions2: [],
        selectedCity3: [],
        cityOptions3: [],
        selectedCity4: [],
        cityOptions4: [],
        selectedCity5: [],
        cityOptions5: [],
        selectedCity6: [],
        cityOptions6: [],
        pending: false
      }
    },

    ready() {
      this.cityOptions6 =
      this.cityOptions5 =
      this.cityOptions4 =
      this.cityOptions3 =
      this.cityOptions2 =
      this.cityOptions1 =  CityJSON.data.cityList.map(function (item) {
        return {label: item.city_name, value: item.city_id+''}
      })
    },
    methods: {
      fetchOption(searchText) {
        this.pending = true;
        setTimeout(()=>{
          var result = [];
          CityJSON.data.cityList.forEach(function (item) {
            if(item.city_name.indexOf(searchText) != -1) {
              result.push({label: item.city_name, value: item.city_id+''});
            }
          })
          this.cityOptions5 = result;
          this.pending = false;
        },1000);
        
      }
    }
  }
</script>
```
# Notice
- limit  是数值类型
- multiple 为true时， 将closeOnSelect设为false
- isAjaxOption，fetchOption，isAjaxPending，keyUpDebounce 配合使用达到ajax数据源的效果