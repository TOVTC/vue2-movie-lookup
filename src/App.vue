<template>
  <div id="app">
    <header>
          <router-link to="/"><h1>Movie Lookup</h1></router-link>
        <nav>
          <router-link to="/trending">Trending</router-link> |
          <router-link to="/popular">Popular</router-link> |
          <router-link to="/top-rated">Top Rated</router-link> |
          <router-link to="/now-playing">Now Playing</router-link>
        </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 1.5rem;
}

header a, nav a {
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #808080;
}

.main {
  margin: 5rem 10rem;
}

.title {
    font-weight: bold;
}
</style>
