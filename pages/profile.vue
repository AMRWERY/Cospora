<template>
  <div>
    <div class="max-w-full py-16 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col p-6 bg-white sm:flex-row">
        <!-- First column (size 8) -->
        <div class="w-full pr-4 sm:w-2/3">
          <form action="" class="space-y-8">
            <div class="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <dynamic-inputs :label="t('form.first_name')" type="text" v-model="firstName" />
              </div>

              <div class="sm:col-span-3">
                <dynamic-inputs :label="t('form.last_name')" type="text" v-model="lastName" />
              </div>
            </div>

            <div class="col-span-full">
              <dynamic-inputs :label="t('form.email')" type="email" v-model="email" />
            </div>
          </form>
        </div>

        <div class="w-full mt-4 sm:w-1/3 sm:mt-0">
          <div
            class="max-w-2xl mx-4 mt-6 text-gray-900 bg-white rounded-lg shadow-xl sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
            <div class="h-32 overflow-hidden rounded-t-lg">
              <img class="object-cover object-top w-full"
                src="https://justfields.com/storage/projects/7M5rV059/Mountain.jpg" />
            </div>
            <div class="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full ">
              <img class="object-cover object-center h-32"
                src="https://justfields.com/storage/projects/7M5rV059/profile.jpg" />
            </div>
            <div class="pb-4 mt-2 text-center">
              <h2 class="font-semibold">{{ firstName }} {{ lastName }}</h2>
              <p class="text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const firstName = ref('')
const lastName = ref('')
const email = ref('')

onMounted(() => {
  firstName.value = sessionStorage.getItem('firstName');
  lastName.value = sessionStorage.getItem('lastName');
  email.value = sessionStorage.getItem('email');
})

const { t } = useI18n()

useHead({
  titleTemplate: () => t("head.profile"),
});
</script>