<script setup>
onMounted(() => {
  const cookieStorage = {
    getItem: (item) => {
      const cookies = document.cookie
        .split(';')
        .map(cookie => cookie.split('='))
        .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})
      return cookies[item]
    },
    setItem: (item, value) => {
      document.cookie = `${item}=${value};`
    },
  }

  const storageType = cookieStorage
  const consentPropertyName = 'jdc_consent'
  const shouldShowPopup = () => !storageType.getItem(consentPropertyName)
  const saveToStorage = () => storageType.setItem(consentPropertyName, true)

  const consentPopup = document.getElementById('consent-popup')
  const acceptBtn = document.getElementById('accept')

  window.onload = () => {
    const acceptFn = (event) => {
      saveToStorage(storageType)
      consentPopup.classList.add('hidden')
    }
    acceptBtn.addEventListener('click', acceptFn)

    if (shouldShowPopup(storageType)) {
      setTimeout(() => {
        consentPopup.classList.remove('hidden')
      }, 100)
    }
  }
})
</script>

<template>
  <div id="consent-popup" class="hidden">
    <p>
      By using this site you agree to our <a href="#">Terms and Conditions</a>.
      Please <a id="accept" href="#">Accept</a> these before using the site.
    </p>
  </div>
</template>

<style scoped>
#consent-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 8rem;
  color: black;
  background-color: #fff;
  transition: opacity 1s ease;
}

#consent-popup.hidden {
  opacity: 0;
}
</style>
