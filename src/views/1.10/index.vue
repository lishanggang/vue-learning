<template>
  <div>
    <span>Message: {{ msg }}</span>
    <br />
    <VNodes :vnodes="getJSXSpan()" />
    <h4>template</h4>
    <anchored-heading1 :level="1">Hello world! 1</anchored-heading1>
    <h4>JS</h4>
    <anchored-heading2 :level="2">Hello world! 2</anchored-heading2>
    <h4>JSX</h4>
    <anchored-heading3 :level="3">Hello world! 3</anchored-heading3>
    <VNodes :vnodes="getAnchoredHeading(4)" />
  </div>
</template>
<script>
import AnchoredHeading1 from "./AnchoredHeading.vue";
import AnchoredHeading2 from "./AnchoredHeading.js";
import AnchoredHeading3 from "./AnchoredHeading.jsx";

export default {
  components: {
    AnchoredHeading1,
    AnchoredHeading2,
    AnchoredHeading3,
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  data() {
    return {
      msg: "hello vue"
    };
  },
  methods: {
    getJSXSpan() {
      return <span>Message-jsx: {this.msg}</span>;
    },
    getAnchoredHeading(level) {
      const Tag = `h${level}`;
      return <Tag>Hello world!</Tag>;
    }
  }
};
</script>
