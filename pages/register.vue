<template>
  <div>
    <breadcrumb />

    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-lg space-y-8">
        <div class="p-6 bg-white rounded-md">
          <h2 class="my-3 text-2xl font-bold tracking-tight text-gray-900 text-start">
            Create Account
          </h2>
          <p class="mb-5 text-xs text-gray-600">By creating an account you will be able to shop faster, be up to date on
            an order's status, and keep track of the orders you have previously made.</p>

          <form class="space-y-6" method="POST">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gray-700">First Name</label>
              <div class="mt-1">
                <div class="relative">
                  <input type="text" class="w-full p-3 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter your first name" />
                  <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <icon name="material-symbols:contact-emergency-outline" class="w-4 h-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name</label>
              <div class="mt-1">
                <div class="relative">
                  <input type="text" class="w-full p-3 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter your last name" />
                  <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <icon name="material-symbols:contact-emergency-outline" class="w-4 h-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email
                <span class="text-red-800">*</span>
              </label>
              <div class="mt-1">
                <div class="relative">
                  <input type="email" class="w-full p-3 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter email" />
                  <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                    <icon name="ic:baseline-alternate-email" class="w-4 h-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password
                <span class="text-red-800">*</span>
              </label>
              <div class="mt-1">
                <div class="relative">
                  <input :type="showPassword ? 'text' : 'password'" id="password"
                    class="w-full p-3 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                    placeholder="Enter password" />
                  <span class="absolute inset-y-0 grid px-4 cursor-pointer end-0 place-content-center"
                    @click="togglePassword">
                    <icon :name="showPassword ? 'fluent:eye-hide-20-filled' : 'fluent:eye-32-filled'"
                      class="w-4 h-4 text-gray-400" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button type="submit"
                class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">Create
                an
                Account
              </button>
            </div>
          </form>
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

useHead({
  titleTemplate: 'Register',
})
</script>