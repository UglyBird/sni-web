<template>
  <div class="hello">
    <button @click='push'>点击我{{count}}</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    push: function(){

      console.log('push--');
      this.$router.push('/info')
    }
  },
  computed: mapState({
    count: state => state.count
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
