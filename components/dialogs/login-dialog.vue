<template>
  <div>
    <div class="max-w-screen-xl mx-auto">
      <div class="max-w-lg mx-auto">
        <form action="" class="p-4 mb-0 space-y-4 rounded-lg sm:p-6 lg:p-4">
          <p class="text-lg font-medium text-start">Login</p>
          <div>
            <label for="email" class="sr-only">Email</label>
            <div class="relative">
              <input type="email" class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                placeholder="Enter email" />
              <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <icon name="ic:baseline-alternate-email" class="w-4 h-4 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" id="password"
                class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12" placeholder="Enter password" />
              <span class="absolute inset-y-0 grid px-4 cursor-pointer end-0 place-content-center"
                @click="togglePassword">
                <icon :name="showPassword ? 'fluent:eye-hide-20-filled' : 'fluent:eye-32-filled'"
                  class="w-4 h-4 text-gray-400" />
              </span>
            </div>
          </div>

          <button type="submit"
            class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
            Login
          </button>

          <div class="text-center">
            <nuxt-link to="/forget-password" class="text-sm text-gray-500">
              Forget your Password?
            </nuxt-link>
          </div>
        </form>

        <div class="p-4 mb-0 space-y-4 rounded-lg sm:p-6 lg:p-4">
          <nuxt-link to="/register" type="button"
            class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
            Create Account
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>