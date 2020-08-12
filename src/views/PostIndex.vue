<template>
  <div class="postindex">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <h1><a v-bind:href="`/posts/${post.id}`">{{ post.title }}</a></h1>
      <h3>{{ post.body }}</h3>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "P O S T    I N D E X ",
      posts: [],
    };
  },
  created: function () {
    this.postIndex();
  },

  methods: {
    postIndex: function () {
      axios.get("/api/posts").then((response) => {
        console.log(response);
        this.posts = response.data;
      });
    },
  },
};
</script>