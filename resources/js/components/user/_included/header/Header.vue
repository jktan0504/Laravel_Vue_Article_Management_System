<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/"><a class="navbar-brand">MyBloggs</a></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/allposts" tag="li" activeClass="active"><a class="nav-link">Posts</a></router-link>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul class="navbar-nav">
                <router-link to="/login" tag="li" activeClass="active"><a class="nav-link">Login</a></router-link>
                <span> | </span>
                <router-link to="/register" tag="li" activeClass="active"><a class="nav-link">Register</a></router-link>
            </ul>
      </div>
    </nav>

</template>

<script>
    export default {
    }
</script>

<style lang="css">
</style>
