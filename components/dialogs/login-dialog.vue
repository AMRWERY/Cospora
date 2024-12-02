<template>
  <div>
    <div class="max-w-screen-xl mx-auto" v-if="dialogVisible">
      <div class="max-w-lg p-4 mx-auto">
        <p class="mb-3 text-2xl font-bold tracking-tight text-gray-900 text-start">Login</p>
        <div class="flex flex-col gap-2">
          <client-only>
            <dynamic-inputs v-model="data.email" label="Email" placeholder="Enter your email" type="email"
              :validation="('required|email|ends_with:cospora.com')" :required="true" />
            <dynamic-inputs v-model="data.password" label="Password" placeholder="Enter your password" type="password"
              :validation="'required|password|length:6,7'" :required="true" />
            <div>
              <button type="submit" :disabled="loading" @click="signIn"
                class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
                <div v-if="loading">
                  <span class="me-2">{{ $t('buttons.loading') }}...</span>
                  <icon name="svg-spinners:270-ring-with-bg" />
                </div>
                <span v-else>{{ $t('forms.login') }}</span>
              </button>
            </div>
          </client-only>
        </div>

        <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
          {{ errorMessage }}
        </div>

        <div class="mt-2 text-center">
          <nuxt-link to="/forget-password" class="text-sm text-gray-500" @click="navigateToRegister">
            Forget your Password?
          </nuxt-link>
        </div>

        <div class="pt-4 mb-0 space-y-4 rounded-lg">
          <nuxt-link to="/register" type="button" @click="navigateToRegister"
            class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
            Create Account
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- successful-auth alert -->
    <successful-auth v-if="showToast" title="successfully Logged in!"
      message="Your account has been successfully logged in." @close="showToast = false" />
  </div>
</template>

<script setup>
const store = useAuthStore()
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter()
const showToast = ref(false);
const dialogVisible = ref(true);

const data = ref({
  email: '',
  password: ''
});

const signIn = async () => {
  loading.value = true;
  try {
    await store.userSignIn({
      email: data.value.email,
      password: data.value.password,
    });
    showToast.value = true;
    dialogVisible.value = false;
    setTimeout(() => {
      router.replace('/');
    }, 6000);
  } catch (error) {
    // console.error("Login failed:", error);
    errorMessage.value = "Login failed. Please check your information and try again.";
  } finally {
    loading.value = false;
  }
};

const navigateToRegister = () => {
  dialogVisible.value = false;
};
</script>