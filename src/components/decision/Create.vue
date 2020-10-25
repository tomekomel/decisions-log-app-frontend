<template>
  <div class="container">
    <h1>Create New Decision</h1>

    <form class="form-horizontal">
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="title">Title</label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            class="form-input"
            type="text"
            id="title"
            v-model="title"
            placeholder="title"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="reasons">Reasons</label>
        </div>
        <div class="col-9 col-sm-12">
          <textarea
            class="form-input"
            id="reasons"
            v-model="reasons"
            placeholder="reasons"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="author">Author</label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            class="form-input"
            type="text"
            id="author"
            v-model="author"
            placeholder="author"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="type">Type</label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            class="form-input"
            type="text"
            id="type"
            v-model="type"
            placeholder="type"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-3 col-sm-12">
          <label class="form-label" for="type">Date</label>
        </div>
        <div class="col-9 col-sm-12">
          <input
            class="form-input"
            type="text"
            id="date"
            v-model="date"
            placeholder="date"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="col-12 col-sm-12">
          <button class="btn btn-primary input-group-btn btn-lg">Submit</button>
        </div>
      </div>
      <!-- form structure -->
    </form>
  </div>
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
        type: this.type,
        date: this.date
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
