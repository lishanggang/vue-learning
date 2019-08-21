<template>
  <div id="app">
        <hello-world
        :msg="msg"
        >
        </hello-world>
        <!-- <div>
            <input type="text" v-model="info">
            <button v-on:click="handleClick">添加</button>
        </div>
        <ul>
            <todo-item v-for="item in list" :key="item">
              <template v-slot:item="slotProps">
                <span :style="{fontSize: '20px', color: slotProps.checked ? 'red': 'blue'}">{{item}}</span>
              </template>

            </todo-item>
        </ul> -->
        <router-view />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TodoItem from './components/TodoItem.vue'
export default {
  name: 'app',
  data() {
    return {
        msg: 'Hello Vue',
        info: '',
        list: [1,2,3],
    }
  },
  methods: {
    handleClick() {
        this.list.push(this.info)
        this.info = ''
    }
  },
  components: {
    HelloWorld,
    TodoItem
  }
}
</script>

<style>

</style>
