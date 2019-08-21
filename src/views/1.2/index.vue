<template>
  <div>
    <PersonalInfo v-model="phoneInfo" :zip-code.sync="zipCode" />

<PersonalInfo
  :zip-code="zipCode"
  @update:zipCode="val => (zipCode = val)"
/>

    手机号 phoneInfo： {{ phoneInfo }}
    <br />
    邮编 zipCode： {{ zipCode }}
  </div>
</template>
<script>
import PersonalInfo from "./PersonalInfo";
export default {
  components: {
    PersonalInfo
  },
  data() {
    return {
      phoneInfo: {
        areaCode: "+86",
        phone: ""
      },
      zipCode: ""
    };
  }
};
</script>
