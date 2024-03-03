<template>
<div class="submit-form">
    <div v-if="!submitted">
    <div class="form-group">
        <label for="title">title</label>
        <input 
        type="text" 
        class="form-control" 
        id="title"
        required
        v-model="tutorial.title"
        name="title"/>
    </div>
    <div class="form-group">
        <label for="desc">description</label>
        <input 
        type="text" 
        class="form-control" 
        id="description"
        required
        v-model="tutorial.description"
        name="description"/>
    </div>
    <button @click="savetutorial" class="btn btn-success">submit</button>
    </div>
    <div v-else>
        <h4>news added successfully</h4>
        <button @click="newtutorial" class="btn btn-success">
            Add
        </button>
    </div>
</div>
</template>
<script>
import TutorialDataServices from "../services/TutorialDataServices";
export default {
    name : "add-tutorial",
    data() {
        return {
            tutorial : {
                id : null,
                title : "",
                description : "",
                published : false,
            },
            submitted : false
        };
    },
    methods: {
        savetutorial() {
            var data = {
                title : this.tutorial.title, 
                description : this.tutorial.description
            };
            TutorialDataServices.create(data).then(response => {
                this.tutorial.id = response.data.id;
                console.log(response.data);
                this.submitted = true;
            })
            .catch(err => {
                console.log(err);
            });
        },
        newtutorial() {
            this.submitted = false;
            this.tutorial = {};
        }
    },
}; 
</script>