<template>
  <div id="page-container">
    <header>
          <router-link to="/"><h1 class="spacing">Movie Lookup</h1></router-link>
        <nav class="spacing">
          <router-link to="/trending">Trending</router-link> |
          <router-link to="/popular">Popular</router-link> |
          <router-link to="/top-rated">Top Rated</router-link> |
          <router-link to="/now-playing">Now Playing</router-link>
        </nav>
    </header>
    <div id="content-wrap">
    <router-view :key="$route.fullPath"></router-view>
    </div>
    <footer id="footer">
      <img src="@/assets/tmdb.svg" id="logo" class="spacing"/>
      <p class="spacing">This product uses the TMDB API but is not endorsed or certified by TMDB</p>
    </footer>
  </div>
</template>

<style>
#page-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  position: relative;
  min-height: 100vh
}

#content-wrap {
  padding-bottom: 4.5rem;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
}

header, footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.spacing {
  margin: 1.5rem;
}

header a, nav a {
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #808080;
}

ul li {
  list-style-type: none;
  text-decoration: none;
  color: #000000;
}

.main {
  margin: 5rem 10rem;
}

.title {
    font-weight: bold;
}

#logo {
  max-width: 10rem;
}
</style>
