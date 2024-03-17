<template>
    <div class="edit-form">
        <h4>News</h4>
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="class-control" id="title" v-model="currentnews.title">
            </div>
            <div class="form-group">
                <label for="text">Description</label>
                <!-- <input type="text" class="class-control" id="description" v-model="currentnews.description"> -->
            </div>
            <div class="form-group">
                <!-- <label for="">Status : </label> {{ currentnews.published ? "published":"unpublished" }} -->
            </div>
        </form>
        <!-- <button class="badge badge-primary mr-2" v-if="currentnews.published" @click="updatepublished(false)">Unpublish</button>
        <button class="badge badge-primary mr-2" v-else @click="updatepublished(true)">Publish</button>
        <button class="badge badge-danger mr-2" @click="deletenews">Delete News</button>
        <button class="badge badge-success mr-2" @click="updatenews">Update News</button> -->
        <p>{{ message }}</p>
    </div>
</template>
<script>
import TutorialDataServices from "../services/TutorialDataServices";
export default {
    name : "tutorial",
    data () {
        return {
            currentnews : null,
            message : "",
        };
    },
    methods : {
        getnews(id) {
            TutorialDataServices.get(id)
            .then (response => {
                this.currentnews = response.data;
                console.log("hello");
            }).catch(err => {
                console.log(err);
            });
        },
        updatenews() {
            TutorialDataServices.update(this.currentnews.id, this.currentnews)
            .then (response => {
                this.message = "News was updated successfully";
            }).catch (err => {
                console.log(err);
                this.message = "Update was failed, reason : " + err.message;
            });
        },
        updatepublished(status) {
            var data = {
                id : this.currentnews.id,
                title : this.currentnews.title,
                description : this.currentnews.description,
                published : status
            };
            TutorialDataServices.update(this.currentnews.id, data)
            .then (response => {
                this.message = "News was updated successfully";
            }).catch (err => {
                console.log(err);
                this.message = "Update was failed, reason : " + err.message;
            });
        },
        deletenews() {
            TutorialDataServices.delete(this.currentnews.id)
            .then(response => {
                this.message = "News was deleted successfully"
            }).catch (err => {
                console.log(err);
                this.message = "Delete was failed, reason : " + err.message;
            });
        }
    },
    mounted() {
        this.getnews(1);
    },
}
</script>