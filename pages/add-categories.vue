<template>
  <div>
    <div class="max-w-2xl p-6 mx-auto bg-white border rounded-lg">
      <h2 class="mb-4 text-xl font-bold">Add Category</h2>
      <form @submit.prevent="handleAddCategory">
        <div class="mb-4">
          <label for="category-title" class="block text-sm font-medium text-gray-700">Category Title</label>
          <input id="category-title" type="text" v-model="newCategoryTitle"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter category title"
            required />
        </div>
        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-lg">Add Category</button>
      </form>

      <h2 class="mt-8 mb-4 text-xl font-bold">Add Subcategory</h2>
      <form @submit.prevent="handleAddSubCategory">
        <div class="mb-4">
          <label for="subcategory-title" class="block text-sm font-medium text-gray-700">Subcategory Title</label>
          <input id="subcategory-title" type="text" v-model="newSubCategoryTitle"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter subcategory title" required />
        </div>
        <div class="mb-4">
          <label for="main-category" class="block text-sm font-medium text-gray-700">Main Category</label>
          <select id="main-category" v-model="selectedCategoryId"
            class="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300" required>
            <option value="" disabled>Select a main category</option>
            <option v-for="category in store.categories" :key="category.id" :value="category.id">
              {{ category.title }}
            </option>
          </select>
        </div>
        <button type="submit" class="px-4 py-2 text-white bg-green-500 rounded-lg">Add Subcategory</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '@/stores/categoriesStore';

const store = useCategoriesStore();

const newCategoryTitle = ref('');
const newSubCategoryTitle = ref('');
const selectedCategoryId = ref('');

const handleAddCategory = async () => {
  if (newCategoryTitle.value.trim()) {
    await store.addCategory(newCategoryTitle.value.trim());
    newCategoryTitle.value = '';
  }
};

const handleAddSubCategory = async () => {
  if (newSubCategoryTitle.value.trim() && selectedCategoryId.value) {
    await store.addSubCategory(newSubCategoryTitle.value.trim(), selectedCategoryId.value);
    newSubCategoryTitle.value = '';
    selectedCategoryId.value = '';
  }
};

onMounted(() => {
  store.fetchCategories();
});

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.categories'),
})
</script>