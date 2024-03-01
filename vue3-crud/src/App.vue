<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add News</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      
    </div>
  </div>
</template>
<script>
  export default {
    name: "app"
  };
</script>