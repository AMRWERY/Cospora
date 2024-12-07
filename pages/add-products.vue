<template>
  <div>
    <div class="max-w-2xl px-8 py-6 mx-auto my-8 bg-white border rounded-lg">
      <h2 class="mb-4 text-2xl font-medium text-center">Add product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="main-category" class="block mb-2 font-medium text-gray-700">Main Category</label>
          <select id="main-category" name="main-category" v-model="selectedCategory" @change="onCategoryChange"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
            <option value="">Select Main Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="sub-category" class="block mb-2 font-medium text-gray-700">Sub Category</label>
          <select id="sub-category" name="sub-category" v-model="selectedSubCategory"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
            <option value="">Select Sub Category</option>
            <option v-for="subCategory in subCategories" :key="subCategory.id" :value="subCategory.id">{{
              subCategory.title }}</option>
          </select>
        </div>

        <div class="mb-4">
          <div class="mx-auto overflow-hidden rounded-lg ">
            <div class="md:flex">
              <div class="w-full">
                <div
                  class="relative flex items-center justify-center h-48 bg-gray-100 border-2 border-blue-700 border-dashed border-dotted rounded-lg">
                  <div class="absolute">
                    <div class="flex flex-col items-center">
                      <icon name="material-symbols:add-photo-alternate" class="w-20 h-20 text-blue-700" />
                      <span class="block font-normal text-gray-400">Attach you files here</span>
                    </div>
                  </div>
                  <input type="file" class="w-full h-full opacity-0" @change="handleFileChange" multiple>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex mx-auto mb-4 space-s-6">
          <div v-if="product.imgOne" class="mt-4">
            <img :src="product.imgOne" class="w-32 h-32 rounded-lg">
          </div>
          <div v-if="product.imgTwo" class="mt-4">
            <img :src="product.imgTwo" class="w-32 h-32 rounded-lg">
          </div>
        </div>

        <div class="mb-4">
          <label for="title" class="block mb-2 font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" v-model="product.title"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>

        <div class="mb-4">
          <label for="subtitle" class="block mb-2 font-medium text-gray-700">Subtitle</label>
          <input type="text" id="subtitle" name="subtitle" v-model="product.subtitle"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>

        <div class="mb-4">
          <div class="flex flex-wrap -mx-2">
            <div class="w-1/4 px-2">
              <label for="new" class="block mb-2 font-medium text-gray-700">
                <input type="checkbox" id="new" name="new" value="new" class="me-2" v-model="product.productTypes">New
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="sale" class="block mb-2 font-medium text-gray-700">
                <input type="checkbox" id="sale" name="sale" value="sale" class="me-2"
                  v-model="product.productTypes">Sale
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="bundle" class="block mb-2 font-medium text-gray-700">
                <input type="checkbox" id="bundle" name="bundle" value="bundle" class="me-2"
                  v-model="product.productTypes">Bundle
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="custom-label" class="block mb-2 font-medium text-gray-700">
                <input type="checkbox" id="custom-label" name="custom-label" value="custom-label" class="me-2"
                  v-model="product.productTypes">Custom Label
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <label for="price" class="block mb-2 font-medium text-gray-700">Price</label>
          <input type="number" id="price" name="price" v-model="product.price"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>

        <div class="mb-4">
          <label for="discount" class="block mb-2 font-medium text-gray-700">Discount</label>
          <input type="number" id="discount" name="discount" v-model="product.discount"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
        </div>

        <div>
          <button type="submit"
            class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()
const categories = ref([])
const subCategories = ref([])
const selectedCategory = ref('')
const selectedSubCategory = ref('')
const product = ref({ title: '', subtitle: '', price: '', discount: '', productTypes: [] })

const handleFileChange = async (event) => {
  const files = Array.from(event.target.files);
  if (files.length > 2) {
    alert("You can only upload up to two images.");
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload an image in JPEG, PNG, or WebP format.');
      return;
    }
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Image size must not exceed 2MB.');
      return;
    }
    const base64Image = await convertToBase64(file);
    if (i === 0) {
      product.value.imgOne = base64Image;
    } else if (i === 1) {
      product.value.imgTwo = base64Image;
    }
  }
};

// Convert image to base64
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const handleSubmit = async () => {
  const selectedCategoryObj = categories.value.find(category => category.id === selectedCategory.value);
  const selectedSubCategoryObj = subCategories.value.find(subCategory => subCategory.id === selectedSubCategory.value);
  const productData = {
    ...product.value,
    categoryId: selectedCategory.value,
    subCategoryId: selectedSubCategory.value,
    categoryTitle: selectedCategoryObj?.title || '',
    subCategoryTitle: selectedSubCategoryObj?.title || '',
    imgOne: product.value.imgOne || null,
    imgTwo: product.value.imgTwo || null,
    productTypes: product.value.productTypes,
  };
  if (product.value.imgOne) productData.imgOne = product.value.imgOne;
  if (product.value.imgTwo) productData.imgTwo = product.value.imgTwo;
  try {
    await store.createProduct(productData);
    alert("Product added successfully!");
  } catch (error) {
    console.error("Error adding product:", error);
  }
};

const onCategoryChange = () => {
  if (selectedCategory.value) {
    subCategories.value = store.subCategories.filter(subCategory => subCategory.categoryId === selectedCategory.value);
    selectedSubCategory.value = "";
  }
};

// Watch for category changes
watch(() => selectedCategory.value, onCategoryChange, { immediate: true });

onMounted(async () => {
  await store.fetchCategories();
  categories.value = store.categories;
});

onMounted(async () => {
  await store.fetchSubCategories();
  subCategories.value = store.subCategories;
  // console.log(store.subCategories);
})

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.products'),
})
</script>