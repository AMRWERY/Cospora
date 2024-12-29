<template>
  <div>
    <breadcrumb />

    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="p-6 bg-white rounded-md">
          <h2 class="my-3 text-2xl font-bold tracking-tight text-gray-900 text-start">
            {{ $t('form.create_account') }}
          </h2>
          <p class="mb-5 text-xs text-gray-600">{{
            $t('form.by_creating_an_account_you_will_be_able_to_shop_faster_be_up_to_date_on_an_orders_status_and_keep_track_of_the_orders_you_have_previously_made')
          }}</p>
          <div class="flex flex-col gap-2">
            <client-only>
              <div class="relative mb-3">
                <dynamic-inputs v-model="data.firstName" :label="t('form.first_name')"
                  :placeholder="t('form.enter_your_first_name')" type="text" :validation="('required|length:3,10')"
                  :required="true" />
                <p v-if="store.suggestions.length" class="mt-2 text-sm text-red-500">
                  {{ $t('form.name_is_already_taken_please_choose_one_of_the_suggestions_below') }}
                </p>
                <div v-if="store.suggestions.length" class="flex flex-wrap gap-2 mt-2">
                  <span v-for="(suggestion, index) in store.suggestions" :key="index"
                    @click="data.firstName = suggestion"
                    class="px-3 py-1 text-sm text-gray-700 transition bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200">
                    {{ suggestion }}
                  </span>
                </div>
              </div>
              <dynamic-inputs v-model="data.lastName" :label="t('form.last_name')"
                :placeholder="t('form.enter_your_last_name')" type="text" :validation="('required|length:3,10')"
                :required="true" />
              <dynamic-inputs v-model="data.email" :label="t('form.email')" :placeholder="t('form.enter_your_email')"
                type="email" :validation="('required|email|ends_with:cospora.com')" :required="true" />
              <dynamic-inputs v-model="data.password" :label="t('form.password')"
                :placeholder="t('form.enter_your_password')" type="password"
                :validation="'required|password|length:6,7'" :required="true" />
              <div>
                <button type="submit" :disabled="loading" @click="signUp"
                  class="block w-[400px] px-5 py-2 text-sm font-medium text-center text-white transition duration-300 bg-black border border-black rounded-md hover:bg-red-600 hover:text-white">
                  <div class="flex items-center justify-center" v-if="loading">
                    <span class="text-center me-2">{{ $t('loading_btn.signing_up') }}...</span>
                    <icon name="svg-spinners:270-ring-with-bg" />
                  </div>
                  <span v-else>{{ $t('form.create_an_account') }}</span>
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
const { t } = useI18n()

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

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
    showToast.value = true;
    toastTitle.value = t('toast.account_created');
    toastMessage.value = t('toast.your_account_has_been_successfully_created');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle'
    dialogVisible.value = false;
    store.setUserDetails({
      firstName: data.value.firstName,
      lastName: data.value.lastName,
    });
    store.setWelcomeMessageVisibility(true);
    setTimeout(() => {
      router.replace('/');
    }, 3000);
  }
  catch (error) {
    // console.error("Sign-up failed:", error);
    errorMessage.value = t('form.sign_up_failed_please_check_your_information_and_try_again');
    router.replace("/register");
  } finally {
    loading.value = false;
  }
};

const firstNameRef = toRef(data.value, 'firstName');

watch(firstNameRef, (newName) => {
  store.checkNameAvailability(newName);
});

useHead({
  titleTemplate: () => t("head.register"),
});
</script>