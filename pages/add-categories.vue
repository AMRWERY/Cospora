<template>
  <div>
    <breadcrumb />

    <div class="max-w-2xl p-6 mx-auto mt-5 bg-white border rounded-lg">
      <h2 class="mb-4 text-xl font-bold">{{ $t('form.add_categories') }}</h2>
      <form @submit.prevent="handleAddCategory">
        <div class="mb-4">
          <label for="category-title" class="block text-sm font-medium text-gray-700">{{ $t('form.category_title')
            }}</label>
          <input id="category-title" type="text" v-model="newCategoryTitle"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
            :placeholder="$t('form.enter_category_title')" required />
        </div>
        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-lg">
          <div class="flex items-center justify-center" v-if="loadingOne">
            <span class="text-center me-2">{{ $t('loading_btn.please_wait') }}...</span>
            <icon name="svg-spinners:270-ring-with-bg" />
          </div>
          <span v-else>{{ $t('btn.add_category') }}</span>
        </button>
      </form>

      <h2 class="mt-8 mb-4 text-xl font-bold">{{ $t('form.add_subcategory') }}</h2>
      <form @submit.prevent="handleAddSubCategory">
        <div class="mb-4">
          <label for="subcategory-title" class="block text-sm font-medium text-gray-700">{{ $t('form.subcategory_title')
            }}</label>
          <input id="subcategory-title" type="text" v-model="newSubCategoryTitle"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
            :placeholder="$t('form.enter_subcategory_title')" required />
        </div>
        <div class="mb-4">
          <label for="main-category" class="block text-sm font-medium text-gray-700">{{ $t('form.main_category')
            }}</label>
          <select id="main-category" v-model="selectedCategoryId"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" required>
            <option value="" disabled>{{ $t('form.select_a_main_category') }}</option>
            <option v-for="category in store.categories" :key="category.id" :value="category.id">
              {{ category.title }}
            </option>
          </select>
        </div>
        <button type="submit" class="px-4 py-2 text-white bg-green-500 rounded-lg">
          <div class="flex items-center justify-center" v-if="loadingTwo">
            <span class="text-center me-2">{{ $t('loading_btn.please_wait') }}...</span>
            <icon name="svg-spinners:270-ring-with-bg" />
          </div>
          <span v-else>{{ $t('btn.add_subcategory') }}</span>
        </button>
      </form>
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
import { useCategoriesStore } from '@/stores/categoriesStore';

const store = useCategoriesStore();
const loadingOne = ref(false);
const loadingTwo = ref(false);
const newCategoryTitle = ref('');
const newSubCategoryTitle = ref('');
const selectedCategoryId = ref('');

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

const handleAddCategory = async () => {
  loadingOne.value = true;
  if (newCategoryTitle.value.trim()) {
    await store.addCategory(newCategoryTitle.value.trim());
    showToast.value = true;
    toastTitle.value = t('toast.great');
    toastMessage.value = t('toast.category_added_successfully');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle'
    newCategoryTitle.value = '';
  }
  loadingOne.value = false;
  showToast.value = true;
};

const handleAddSubCategory = async () => {
  loadingTwo.value = true;
  if (newSubCategoryTitle.value.trim() && selectedCategoryId.value) {
    await store.addSubCategory(newSubCategoryTitle.value.trim(), selectedCategoryId.value);
    showToast.value = true;
    toastTitle.value = t('toast.great');
    toastMessage.value = t('toast.subcategory_added_successfully');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle'
    newSubCategoryTitle.value = '';
    selectedCategoryId.value = '';
  }
  loadingTwo.value = false;
  showToast.value = true;
};

onMounted(() => {
  store.fetchCategories();
});

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.categories"),
});
</script>