<template>
  <div class="home">
    <div class="hero bg-gray">
      <div class="hero-body">
        <h1>Hero title</h1>
        <p>This is a hero example</p>
      </div>
    </div>

    <div class="empty">
      <div class="empty-icon">
        <i class="icon icon-people"></i>
      </div>
      <p class="empty-title h5">You have no new messages</p>
      <p class="empty-subtitle">Click the button to start a conversation.</p>
      <div class="empty-action">
        <button class="btn btn-primary">Send a message</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
