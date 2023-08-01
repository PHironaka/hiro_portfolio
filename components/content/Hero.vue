<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null,
  },
  available: {
    type: Boolean,
    default: true,
  },
  imageAlt: {
    type: String,
    default: 'Hero Image',
  },
  imagePosition: {
    type: String,
    default: 'right',
  },
})
</script>

<template>
  <section class="hero min-h-[70vh] flex flex-col justify-center">
    <div class="layout">
      <div class="md:w-3/4 ">
        <div class="mt-20">
          <div v-if="available" class="flex items-center gap-4">
            <div class="bg-green w-4 h-4 rounded-full block" />
            <h2> Available for new projects!</h2>
          </div>
        </div>
        <div class="py-10">
          <ContentSlot :use="$slots.title" unwrap="p">
            <h1>Hero title </h1>
          </ContentSlot>
        </div>
        <div class="text-xl md:text-2xl md:w-3/4 mb-10">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero description
          </ContentSlot>

          <NuxtLink class="block w-36 bg-white text-lg  text-center p-2 rounded-md my-10 text-bg " to="/contact">
            Contact me
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
