<template>
  <div class="border">
    <h1>A 节点</h1>
    <button @click="getEH3Ref">获取E h3 Ref</button>
    <div style="display: flex">
        <ChildrenB />
        <ChildrenC />
        <ChildrenD />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide() {
    return {
      setChildrenRef: (name, ref) => {
        console.log({name})
        this[name] = ref;
      },
      getChildrenRef: name => {
        return this[name];
      },
      getRef: () => {
        return this;
      }
    };
  },
  data() {
    return {
      color: "blue"
    };
  },
  methods: {
    getEH3Ref() {
      console.log(this.childrenE);
    }
  }
};
</script>
