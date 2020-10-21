<template>
  <form class="form-horizontal">
    <div class="form-group">
      <div class="col-3 col-sm-12">
        <label class="form-label" for="name">Name</label>
      </div>
      <div class="col-9 col-sm-12">
        <input class="form-input" type="text" id="name" placeholder="Name">
      </div>
    </div>
    <!-- form structure -->
  </form>
</template>

<script>
import axios from "axios";
import { server } from "@/helper";
import router from "../../router";

export default {
  data() {
    return {
      title: "",
      reasons: "",
      author: "",
      type: ""
    };
  },
  methods: {
    createDecision() {
      const decisionData = {
        title: this.title,
        reasons: this.reasons,
        author: this.author,
        type: this.type
      };
      this.__submitToServer(decisionData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/decisions/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>
