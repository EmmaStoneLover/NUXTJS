<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand text-success">
        <img
          src="/favicon.ico"
          width="30"
          height="30"
          class="d-inline-block align-text-top"
        />
        SimpleDimple
      </NuxtLink>
      <div class="nav">
        <NuxtLink to="/" class="nav-link text-success" no-prefetch>
          Home
        </NuxtLink>
        <NuxtLink to="/second" class="nav-link text-success">
          SecondPage
        </NuxtLink>
        <NuxtLink to="/3d" class="nav-link text-success" no-prefetch>
          3dPage
        </NuxtLink>
        <NuxtLink to="/popit" class="nav-link text-success" no-prefetch>
          PopIt
        </NuxtLink>
        <NuxtLink to="/game" class="nav-link text-success" no-prefetch>
          Game
        </NuxtLink>
        <NuxtLink to="/socket-io" class="nav-link text-success" no-prefetch>
          Socket
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
