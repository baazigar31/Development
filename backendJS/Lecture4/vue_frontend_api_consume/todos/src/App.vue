<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>My Todos APP</h1>

    <!-- <p>{{name}}</p> -->
    <ul>
      <li v-for="post of posts" :key="post.id"> {{post.title}} </li>
    </ul>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'App',
  data(){
    return {
      posts:[
        // {
      //   id:1,
      //   title:"Title"
      // },
      // {
      //   id:2,
      //   title:"Title 2"
      // }
      ]
    }
  },
    async created(){
      try{
        const res= await axios.get("http://localhost:3000/api/post");
        this.posts=res.data.data;
        console.log(res);
      }catch(e){
        console.error(e);
      }
    }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
