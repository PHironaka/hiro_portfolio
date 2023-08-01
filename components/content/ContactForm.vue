<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '../../types/contact'

const props = defineProps({
  submitButtonText: {
    type: String,
    default: 'Send message',
  },
  fields: {
    type: Array as PropType<Field[]>,
    default: () => [
      {
        type: 'text',
        model: 'name',
        name: 'Name',
        placeholder: 'Your name',
        required: true,
        layout: 'default',
      },
      {
        type: 'email',
        model: 'email',
        name: 'Email',
        placeholder: 'Your email',
        required: true,
        layout: 'default',
      },
      {
        type: 'text',
        model: 'text',
        name: 'Subject',
        required: false,
        layout: 'default',
      },
      {
        type: 'textarea',
        model: 'message',
        name: 'Message',
        placeholder: 'Your message',
        required: true,
        layout: 'big',
      },
    ],
  },
})

const alpine = useAppConfig().alpine

const { FORMSPREE_URL } = useRuntimeConfig().public

if (!FORMSPREE_URL)
  console.warn('No FORMSPREE_URL provided')

const status = ref()

const form = reactive(props.fields.map(v => ({ ...v, data: '' })))

async function onSend(e: any) {
  e.preventDefault()
  const data = new FormData(e.target)

  status.value = 'Sending...'

  fetch(e.target.action, {
    method: e.target.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      status.value = alpine.form.successMessage
      e.target.reset()
    }
    else {
      // Handle errors from API
      response.json().then((data) => {
        if (Object.hasOwn(data, 'errors')) {
          status.value = data.errors[0].message
          console.error(data.errors.map((error: any) => error.message).join(', '))
          setTimeout(() => {
            status.value = 'Send message'
          }, 2000)
        }
        else {
          console.error('There was a problem submitting your form')
        }
      })
    }
  }).catch(() => {
    // Catch all other errors
    console.error('There was a problem submitting your form')
  })
}
</script>

<template>
  <section>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h1> Get in touch</h1>
      <p class="mb-8 lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
      </p>

      <form
        name="Website Contact Form"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Website Contact Form">
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray dark:text-gray-300">Your email</label>
          <input id="email" type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
        </div>
        <div class="mt-10">
          <label for="subject" class="block mb-2 text-sm font-medium text-gray dark:text-gray-300">Subject</label>
          <input id="subject" type="text" class="block p-3 w-full text-sm text-gray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
        </div>

        <div class="mt-10">
          <label for="budget" class="block mb-2 text-sm font-medium text-gray dark:text-gray-300">What is your budget?</label>
          <input id="budget" type="text" class="block p-3 w-full text-sm text-gray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="$8000" required>
        </div>
        <div class="mt-10">
          <label for="message" class="block mb-2 text-sm font-medium text-gray dark:text-gray-400">Your message</label>
          <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." />
        </div>
        <button type="submit" class="block w-44 bg-white text-center p-2 rounded-md my-10 text-bg">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>
