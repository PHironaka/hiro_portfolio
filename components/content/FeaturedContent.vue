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
  <section class="featuredContent">
    <div class="layout">
      <div>
        <div class="py-10">
          <h3 class="text-2xl">
            Recent Work
          </h3>
        </div>

        <nuxt-picture
          v-if="image"
          :class="imagePosition"
          :src="image"
          format="avif,webp"
          :alt="imageAlt"
          :width="1436"
          :height="1058"
        />

        <div class="text-2xl w-3/4 my-10">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero description
          </ContentSlot>
        </div>
      </div>
    </div>
  </section>
</template>
