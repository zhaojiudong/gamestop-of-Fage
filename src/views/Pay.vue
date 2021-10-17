<template>
  <div class="container">
    <van-nav-bar
      title="虹阳电游"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
    />
    <h3 class="title">将这一页截图发给客服即可</h3>
    <van-empty v-show="show" description="没有添加数据到列表中" />
    <van-list finished-text="没有更多了" v-show="!show">
      <van-row>
        <van-col span="5">序列号</van-col>
        <van-col span="13">名称</van-col>
        <van-col span="5">容量大小</van-col>
      </van-row>
      <van-cell-group>
        <van-cell
          v-for="(item, index) in list"
          :title="item.name"
          :value="item.capacity"  
          :key="index"
        >
          <div slot="icon">{{ index + 1 }}</div>
        </van-cell>
      </van-cell-group>
    </van-list>
    <van-submit-bar
      :price="count * 100"
      currency=""
      suffix-label="G"
      label="合计"
      text-align="center"
    >
      <div slot="button"></div>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      list: [],
      show: true,
      count: 0,
    };
  },
  activated() {
    this.list = JSON.parse(localStorage.getItem("arr"))
    if(this.list.length == 0){
      this.count = 0
      this.show = true
    }else{
      this.modifyData();
    }
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/home");
    },
    modifyData() {
      this.count = 0;
      for (let i = 0; i < this.list.length; i++) {
        this.count += parseFloat(this.list[i].capacity);   
      }
      this.show = false;
    },
  },
};
</script>


<style scoped>
.container >>> .van-row {
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
}
.container >>> .van-cell__title {
  margin-left: 30%;
}

.title{
  margin-top:55px
}
</style>