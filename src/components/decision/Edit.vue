<template>
  <div class="container">
    <div class="col-md-12 form-wrapper">
      <h1>Edit Decision</h1>

      <form
        id="create-decision-form"
        class="form-horizontal"
        @submit.prevent="editDecision"
      >
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="title">Name your decision</label>
          </div>
          <div class="col-9 col-sm-12">
            <input
              class="form-input"
              type="text"
              id="title"
              v-model="decision.title"
              placeholder="Name your decision"
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
              v-model="decision.reasons"
              placeholder="Reasons"
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
              v-model="decision.author"
              placeholder="Author"
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
              v-model="decision.type"
              placeholder="Type of decision"
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
              v-model="decision.date"
              placeholder="Date"
            />
          </div>
        </div>
        <div class="form-group">
          <div class="col-12 col-sm-12">
            <button class="btn btn-primary input-group-btn btn-lg">
              Submit
            </button>
          </div>
        </div>
        <!-- form structure -->
      </form>
    </div>
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
      type: "",
      date: "",
    };
  },
  methods: {
    editDecision() {
      const decisionData = {
        title: this.decision.title,
        reasons: this.decision.reasons,
        author: this.decision.author,
        type: this.decision.type,
        date: this.decision.date
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
