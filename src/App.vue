<template>
  <div id="app">
    <header>
          <router-link to="/"><h1>Movie Lookup</h1></router-link>
        <nav>
          <router-link to="/about">About</router-link> |
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
main {
    margin: 5rem 10rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 1.5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

header a, nav a {
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #808080;
}
</style>
