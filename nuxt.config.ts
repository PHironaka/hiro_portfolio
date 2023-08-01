// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Test',
      meta: [
        // <meta name="description" content="My amazing site">
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'We are a minority-owned company that believes in the power of sport, the potential of the athlete and the future of holistic wellness.',
        },
        {
          name: 'og:description',
          content:
            'We are a minority-owned company that believes in the power of sport, the potential of the athlete and the future of holistic wellness.',
        },
        {
          name: 'og:title',
          content: 'Adopt',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'og:image',
          content:
            'https://cdn.sanity.io/images/vaa5yjnh/production/15b30ffec2d6ad1eb135257fee8fb8f1316f616a-785x785.jpg',
        },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/icons/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/icons/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/icons/favicon-16x16.png',
        },
        {
          rel: 'shortcut icon',
          href: '/icons/favicon.ico',
        },
      ],
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxthq/studio',
    '@nuxt/image',
  ],
})
