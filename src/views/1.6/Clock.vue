<template>
  <div>
    {{ log("render") }}
    打印render:{{renderLog()}}
    {{ now }}
    <button @click="start = !start">{{ start ? "停止" : "开始" }}</button>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data: function() {
    console.log("data");
    this.moment = moment;
    this.log = window.console.log;
    return {
      now: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      start: false
    };
  },
  watch: {
    start() {
      this.startClock();
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
        console.log(this.$el);
    console.log("beforeMount");
  },
  mounted() {
    console.log(this.$el);
    this.startClock();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(this.clockInterval);
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    startClock() {
      clearInterval(this.clockInterval);
      if (this.start) {
        this.clockInterval = setInterval(() => {
          this.now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);
      }
    },
    renderLog () {
      return 'render'
    }
  }
};
</script>
