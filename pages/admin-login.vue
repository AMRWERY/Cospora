<template>
  <div>
    <div class="max-w-lg p-4 mx-auto">
      <p class="mb-3 text-2xl font-bold tracking-tight text-center text-gray-900">{{ $t('form.login') }}</p>
      <div class="flex flex-col gap-2">
        <client-only>
          <dynamic-inputs v-model="data.email" :label="t('form.email')" :placeholder="t('form.enter_your_email')"
            type="email" :validation="('required|email|ends_with:cospora.com')" :required="true" />
          <dynamic-inputs v-model="data.password" :label="t('form.password')"
            :placeholder="t('form.enter_your_password')" type="password" :validation="'required|password|length:6,7'"
            :required="true" />
          <div>
            <button type="submit" :disabled="loading" @click="signIn"
              class="w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
              <div class="flex items-center justify-center" v-if="loading">
                <span class="text-center me-2">{{ $t('btn.loading') }}...</span>
                <icon name="svg-spinners:270-ring-with-bg" />
              </div>
              <span v-else>{{ $t('form.login') }}</span>
            </button>
          </div>
        </client-only>
      </div>

      <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const store = useAuthStore()
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter()

const data = ref({
  email: '',
  password: '',
});

const signIn = async () => {
  loading.value = true;
  try {
    await store.userSignIn({
      email: data.value.email,
      password: data.value.password,
    });
    router.replace('/dashboard');
  } catch (error) {
    // console.error("Login failed:", error);
    errorMessage.value = t('form.login_failed_please_check_your_information_and_try_again');
  } finally {
    loading.value = false;
  }
};

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.login'),
})
</script>