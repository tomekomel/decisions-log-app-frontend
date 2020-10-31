<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Decision Log <span>ver. 1.0</span></h1>
      <div v-if="decisions.length === 0">
        <h2>No decisions found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
            <th scope="col">Text</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="decision in decisions" :key="decision._id">
            <td>{{ decision.title }}</td>
            <td>{{ decision.author }}</td>
            <td>{{ decision.date }}</td>
            <td>{{ decision.text }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link
                    :to="{ name: 'Edit', params: { id: decision._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    ><i class="icon icon-edit"></i>
                  </router-link>
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteDecision(decision._id)"
                  >
                    <i class="icon icon-delete"></i>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <router-link to="/create"
        ><button class="btn btn-action btn-sm btn-outline-secondary">
          <i class="icon icon-plus"></i></button
      ></router-link>
    </div>
  </div>
</template>
<script>
import { server } from "@/helper";
import axios from "axios";

export default {
  data() {
    return {
      decisions: []
    };
  },
  created() {
    this.getDecisions();
  },
  methods: {
    getDecisions() {
      axios
        .get(`${server.baseUrl}/decisions`)
        .then(data => (this.decisions = data.data));
    },
    deleteDecision(id) {
      axios.delete(`${server.baseUrl}/decisions/${id}`).then(data => {
        console.log(data);
        window.location.reload();
      });
    }
  }
};
</script>
