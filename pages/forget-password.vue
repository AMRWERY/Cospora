<template>
  <div>
    <breadcrumb />

    <section class="flex items-center justify-center min-h-screen -mt-28 bg-gray-50 dark:bg-gray-900">
      <div
        class="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Returning Customer
        </h1>
        <p class="mt-3 font-light text-gray-500 dark:text-gray-400">
          If you have an account with us, please log in.
        </p>
        <p class="mt-3 font-light text-gray-500 dark:text-gray-400">
          We will send you an email to reset your password.
        </p>
        <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email
              <span class="text-red-800">*</span>
            </label>
            <div class="relative mt-1">
              <input type="email" class="w-full p-3 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                placeholder="Enter email" />
              <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <icon name="ic:baseline-alternate-email" class="w-4 h-4 text-gray-400" />
              </span>
            </div>
          </div>
          <div class="space-s-4">
            <button type="submit"
              class="px-5 py-2 text-sm font-medium text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
              Reset password
            </button>
            <span>or</span>
            <nuxt-link to="" class="text-blue-500 cursor-pointer">Cancel</nuxt-link>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: 'Forget Password',
})
</script>