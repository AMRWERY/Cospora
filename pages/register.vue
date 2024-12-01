<template>
  <div>
    <breadcrumb />

    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="p-6 bg-white rounded-md">
          <h2 class="my-3 text-2xl font-bold tracking-tight text-gray-900 text-start">
            Create Account
          </h2>
          <p class="mb-5 text-xs text-gray-600">By creating an account you will be able to shop faster, be up to date on
            an order's status, and keep track of the orders you have previously made.</p>
          <div class="flex flex-col gap-4">
            <client-only>
              <dynamic-inputs v-model="data.firstName" label="First Name" placeholder="Enter your first name"
                type="text" :validation="('required|contains_numeric|length:3,10')" />
              <dynamic-inputs v-model="data.lastName" label="Last Name" placeholder="Enter your last name" type="text"
                :validation="('required|contains_numeric|length:3,10')" />
              <dynamic-inputs v-model="data.email" label="Email" placeholder="Enter your email" type="email"
                :validation="('required|email|ends_with:.com')" />
              <dynamic-inputs v-model="data.password" label="Password" placeholder="Enter your password" type="password"
                :validation="'required|password|length:6,7'" />
              <div>
                <button type="submit" :disabled="loading" @click="signUp"
                  class="block w-[400px] px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
                  <div v-if="loading">
                    <span class="me-2">{{ $t('buttons.loading') }}...</span>
                    <icon name="svg-spinners:270-ring-with-bg" />
                  </div>
                  <span v-else>Create
                    an
                    Account</span>
                </button>
              </div>
            </client-only>
          </div>

          <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore()
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter()

const data = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});

const signUp = async () => {
  loading.value = true;
  try {
    await store.userSignUp({
      firstName: data.value.firstName,
      lastName: data.value.lastName,
      email: data.value.email,
      password: data.value.password,
    });
    router.replace("/");
  } catch (error) {
    console.error("Sign-up failed:", error);
    errorMessage.value = "Sign-up failed. Please check your information and try again.";
    router.replace("/register");
  } finally {
    loading.value = false;
  }
};

useHead({
  titleTemplate: 'Register',
})
</script>