<script setup>
const route = useRoute()

const currentPath = computed({
  get() {
    console.log(route.path)
  },
})
</script>

<template>
  <header>
    <div class="py-6 flex justify-between">
      <div>
        <NuxtLink to="/">
         Home
        </NuxtLink>
      </div>
      <nav class="flex list-none gap-6">
        <li>
          <NuxtLink exact-active-class="underline underline-offset-4" to="/about" class="link text-inherit">
            About {{ currentPath }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink exact-active-class="underline underline-offset-4" to="/blog">
            Blog
          </NuxtLink>
        </li>
        <li>
          <NuxtLink exact-active-class="underline underline-offset-4" to="/contact">
            Contact
          </NuxtLink>
        </li>
      </nav>
    </div>
  </header>
</template>
