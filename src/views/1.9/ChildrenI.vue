<template functional>
  <div class="border2">
    <h3 :style="{ color: injections.theme.color }">I 结点</h3>

      <button v-aaa-ref="c => getConsole(c)" @click="number++">
      更新
    </button>

  </div>
</template>
<script>
export default {
  directives: {
    aaaRef: {
      bind (el, binding, vnode) {
        // binding.value(vnode.componentInstance || el, vnode.key);
      },
      update (el, binding, vnode, oldVnode) {
        // if (oldVnode.data && oldVnode.data.directives) {
        //   var oldBinding = oldVnode.data.directives.find(function (directive) {
        //     var name = directive.name;
        //     return name === directiveName;
        //   });
        //   if (oldBinding && oldBinding.value !== binding.value) {
        //     oldBinding && oldBinding.value(null, oldVnode.key);
        //     binding.value(vnode.componentInstance || el, vnode.key);
        //     return;
        //   }
        // }
        // // Should not have this situation
        // if (vnode.componentInstance !== oldVnode.componentInstance || vnode.elm !== oldVnode.elm) {
        //   binding.value(vnode.componentInstance || el, vnode.key);
        // }
      },
      unbind (el, binding, vnode) {
        // binding.value(null, vnode.key);
      }
    }
  },
  inject: {
    theme: {
      default: () => ({})
    }
  },
  methods : {
    getConsole (c) {
      console.log(c)
    }
  }
};
</script>
