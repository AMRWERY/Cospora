<template>
  <div>
    <breadcrumb />

    <section class="flex items-center justify-center min-h-screen -mt-28 bg-gray-50 dark:bg-gray-900">
      <div
        class="w-full p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
        <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {{ $t('form.returning_customer') }}
        </h1>
        <p class="mt-3 font-light text-gray-500 dark:text-gray-400">
          {{ $t('form.if_you_have_an_account_with_us_please_log_in') }}
        </p>
        <p class="font-light text-gray-500 dark:text-gray-400">
          {{ $t('form.we_will_send_you_an_email_to_reset_your_password') }}
        </p>
        <div class="flex flex-col gap-2 mt-4">
          <client-only>
            <dynamic-inputs v-model="data.email" :label="t('form.email')" :placeholder="t('form.enter_your_email')"
              type="email" :validation="('required|email|ends_with:cospora.com')" :required="true" />
            <div class="space-s-4">
              <button type="submit" :disabled="loading" @click="resetPassword"
                class="px-5 py-2 text-sm font-medium text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
                <div class="flex items-center justify-center" v-if="loading">
                  <span class="text-center me-2">{{ $t('loading_btn.please_wait') }}...</span>
                  <icon name="svg-spinners:270-ring-with-bg" />
                </div>
                <span v-else>{{ $t('btn.reset_password') }}</span>
              </button>
              <span>{{ $t('form.or') }}</span>
              <nuxt-link to="" class="text-blue-500 cursor-pointer">{{ $t('btn.cancel') }}</nuxt-link>
            </div>
          </client-only>
        </div>

        <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
          {{ errorMessage }}
        </div>
      </div>
    </section>

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
const { t } = useI18n()

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

const data = ref({
  email: '',
});

const resetPassword = async () => {
  loading.value = true;
  try {
    await store.resetUserPassword({
      email: data.value.email,
    });
    showToast.value = true;
    toastTitle.value = t('toast.password_reset');
    toastMessage.value = t('toast.please_check_your_email_inbox');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle'
  } catch (error) {
    // console.error("Login failed:", error);
    errorMessage.value = t('form.reset_password_failed_please_check_your_information_and_try_again');
  } finally {
    loading.value = false;
  }
};

useHead({
  titleTemplate: () => t("head.forget_password"),
});
</script>