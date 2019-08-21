<template>
  <div>
    <!-- <select
      :value="phoneInfo.areaCode"
      placeholder="区号"
      @change="handleAreaCodeChange"
    >
      <option value="+86">+86</option>
      <option value="+60">+60</option>
    </select> -->
    手机号：
    <input
      :value="phoneInfo.phone"
      type="number"
      placeholder="请输入手机号"
      @input="handlePhoneChange"
    />
    邮编：
    <!-- <input
      :value="zipCode"
      type="number"
      placeholder="请输入邮编"
      @input="handleZipCodeChange"
    /> -->
  </div>
</template>
<script>
export default {
  name: "PersonalInfo",
  // model: {
  //   prop: "phoneInfo", // 默认 value
  //   event: "change" // 默认 input
  // },
  props: {
    phoneInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    zipCode: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleAreaCodeChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        areaCode: e.target.value
      });
    },
    handlePhoneChange(e) {
      this.$emit("change", {
        ...this.phoneInfo,
        phone: e.target.value
      });
    },
handleZipCodeChange(e) {
  this.$emit("update:zipCode", e.target.value);
}
  }
};
</script>
