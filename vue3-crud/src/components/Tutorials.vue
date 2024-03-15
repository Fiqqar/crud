<template>
<div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Tutorials List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.title }}
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4>News</h4>
        <div><label><strong>Title : </strong></label>{{ currentTutorial.title }}</div>
        <div><label><strong>Description : </strong></label>{{ currentTutorial.description }}</div>
        <div><label><strong>Status : </strong></label>{{ currentTutorial.published ?"published":"pending" }}</div>
        <router-link :to="'/tutorials/' + currentTutorial.id" class="badge badge-warning">
          Edit
        </router-link>
      </div>
      <div v-else>
        <p>Please pick a news</p>
      </div>
    </div>
</div>
</template>
<script>
import tutorialDataServices from "../services/TutorialDataServices";
export default {
  name : "Tutorials",
  data() {
    return {
      tutorials : [], 
      currentTutorial : null,
      currentIndex : -1,
      title : ""
    };
  },
  methods : {
    retrievetutorial() {
      tutorialDataServices.getall().then(response => {
        this.tutorials = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    refreshlist() {
      this.retrievetutorial();
      this.currentTutorial = null;
      this.currentIndex = -1; 
    },
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index; 
    },
    // removeAllTutorials() {
    //   tutorialDataServices.deleteall().then (response => {
    //     console.log("All the news are deleted");
    //     this.refreshlist();
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // },
    searchTitle() {
      tutorialDataServices.findbytitle(this.title).then (response => {
        this.tutorials = response.data;
        this.refreshlist();
        console.log(response.data);
      }) 
      .catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.retrievetutorial();
  },
};
</script>