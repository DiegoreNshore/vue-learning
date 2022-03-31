<template>
  <router-link to="/">home</router-link>
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<style lang="scss">
$red100: #222;
$white: #FFF;

body {
  background: $red100;
  color: $white
}
</style>