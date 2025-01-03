<template>
  <div>
    <div class="max-w-screen-xl mx-auto" v-if="dialogVisible">
      <div class="max-w-lg p-4 mx-auto">
        <p class="mb-3 text-2xl font-bold tracking-tight text-gray-900 text-start">{{ $t('form.login') }}</p>
        <div class="flex flex-col gap-2">
          <client-only>
            <dynamic-inputs v-model="data.email" :label="t('form.email')" :placeholder="t('form.enter_your_email')"
              type="email" :validation="('required|email|ends_with:cospora.com')" :required="true" />
            <dynamic-inputs v-model="data.password" :label="t('form.password')"
              :placeholder="t('form.enter_your_password')" type="password" :validation="'required|password|length:6,7'"
              :required="true" />
            <div>
              <button type="submit" :disabled="loading" @click="signIn"
                class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
                <div class="flex items-center justify-center" v-if="loading">
                  <span class="text-center me-2">{{ $t('loading_btn.logging') }}...</span>
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

        <div class="mt-2 text-center">
          <nuxt-link to="/forget-password" class="text-sm text-gray-500" @click="navigateToRegister">
            {{ $t('form.forget_your_password') }}
          </nuxt-link>
        </div>

        <div class="pt-4 mb-0 space-y-4 rounded-lg">
          <nuxt-link to="/register" type="button" @click="navigateToRegister"
            class="block w-full px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
            {{ $t('form.create_account') }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- dynamic-toast component -->
    <div class="fixed z-50 pointer-events-none bottom-5 start-5 w-96">
      <div class="pointer-events-auto">
        <dynamic-toast v-if="showToast" :title="toastTitle" :message="toastMessage" :toastType="toastType"
          :duration="5000" :toastIcon="toastIcon" @toastClosed="showToast = false" />
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useAuthStore()
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter()
const dialogVisible = ref(true);
const { t } = useI18n()

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

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
    showToast.value = true;
    toastTitle.value = t('toast.successfully_logged_in');
    toastMessage.value = t('toast.your_account_has_been_successfully_logged_in');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle';
    dialogVisible.value = false;
    setTimeout(() => {
      router.replace('/');
    }, 6000);
  } catch (error) {
    if (error === 'Your account has been blocked.') {
      errorMessage.value = t('form.account_blocked_please_contact_support');
      // console.log(error)
    } else {
      errorMessage.value = t('form.login_failed_please_check_your_information_and_try_again');
    }
  } finally {
    loading.value = false;
  }
};

const navigateToRegister = () => {
  dialogVisible.value = false;
};
</script>