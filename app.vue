<template>
  <NuxtLayout>
    <NuxtPage>
      <slot />
    </NuxtPage>
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: "DM-Bold";
  src: url("./assets/DMSans-Bold.ttf") format("truetype"),
  url("./assets/DMSans-Bold.woff") format("woff");
  font-display: swap;
}

@font-face {
  font-family: "DM-Regular";
  src: url("./assets/DMSans-Regular.ttf") format("truetype"),
   url("./assets/DMSans-Regular.woff") format("woff")  ;
  font-display: swap;
}

body {
  @apply font-body bg-bg text-white text-base;
}
p {
  @apply py-2;
}

h1 {
  @apply text-4xl lg:text-6xl font-bold;
}

/* transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .site-header, .fade-leave-active .site-header {
  transition: opacity 0.3s;
  transition-delay: .6s;
}
</style>
