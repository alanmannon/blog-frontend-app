<template>
  <div class="show">
    <h1>{{ message }}</h1>    
    <img v-bind:src="post.image">
    <h3>{{ post.title }}</h3>
    <h3>{{ post.body }}</h3>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to SHOW!",
      post: {},
    };
  },
  created: function () {
    this.postShow();
  },
  methods: {
    postShow: function () {
      axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
        console.log();
        this.post = response.data;
      });
    },
  },
};
</script>