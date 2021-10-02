<template>
  <div class="container text-center mt-4">
    <h1>Главная страница</h1>
    <NuxtLink to="/second" class="nav-link" no-prefetch>
      <h3 class="text-success">Second page</h3>
    </NuxtLink>
    <NuxtLink to="/3d" class="nav-link" no-prefetch>
      <h3 class="text-success">3d page</h3>
    </NuxtLink>
    <NuxtLink to="/popit" class="nav-link" no-prefetch>
      <h3 class="text-success">PopIt page</h3>
    </NuxtLink>
    <NuxtLink to="/game" class="nav-link" no-prefetch>
      <h3 class="text-success">Game page</h3>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'home',
}
</script>
