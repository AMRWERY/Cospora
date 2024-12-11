<template>
  <div>
    <div class="max-w-2xl px-8 py-6 mx-auto my-8 bg-white border rounded-lg">
      <h2 class="mb-4 text-2xl font-medium text-center">Add product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="main-category" class="block mb-2 font-medium text-gray-700">Main Category</label>
          <select id="main-category" name="main-category" v-model="selectedCategory" @change="onCategoryChange"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
            <option value="" disabled>Select Main Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.title }}</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="sub-category" class="block mb-2 font-medium text-gray-700">Sub Category</label>
          <select id="sub-category" name="sub-category" v-model="selectedSubCategory"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
            <option value="" disabled>Select Sub Category</option>
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

        <div class="flex items-center justify-center mb-4 space-s-6">
          <div v-if="product.imgOne" class="mt-4 border border-gray-200">
            <img :src="product.imgOne" class="w-48 h-32 rounded-lg">
          </div>
          <div v-if="product.imgTwo" class="mt-4 border border-gray-200">
            <img :src="product.imgTwo" class="w-48 h-32 rounded-lg">
          </div>
          <div v-if="product.imgThree" class="mt-4 border border-gray-200">
            <img :src="product.imgThree" class="w-48 h-32 rounded-lg">
          </div>
          <div v-if="product.imgFour" class="mt-4 border border-gray-200">
            <img :src="product.imgFour" class="w-48 h-32 rounded-lg">
          </div>
        </div>

        <div class="mb-4">
          <label for="title" class="block mb-2 font-medium text-gray-700">Title</label>
          <input type="text" id="title" name="title" v-model="product.title"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="subtitle" class="block mb-2 font-medium text-gray-700">Subtitle</label>
          <input type="text" id="subtitle" name="subtitle" v-model="product.subtitle"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
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
                  v-model="product.productTypes">Custom
              </label>
            </div>
          </div>
        </div>

        <div class="mb-4">
          <label for="original-price" class="block mb-2 font-medium text-gray-700">Original Price</label>
          <input type="text" id="original-price" name="original-price" v-model="product.originalPrice"
            @input="(event) => handleInput(event, 'originalPrice')" @blur="() => handleBlur('originalPrice')"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="price" class="block mb-2 font-medium text-gray-700">Price</label>
          <input type="text" id="price" name="price" v-model="product.price"
            @input="(event) => handleInput(event, 'price')" @blur="() => handleBlur('price')"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="discount" class="block mb-2 font-medium text-gray-700">Discount</label>
          <input type="text" id="discount" name="discount" v-model="product.discount"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="product-code" class="block mb-2 font-medium text-gray-700">Product Code</label>
          <input type="text" id="product-code" name="product-code" v-model="product.productCode"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="brand" class="block mb-2 font-medium text-gray-700">Brand</label>
          <input type="text" id="brand" name="brand" v-model="product.brand"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
        </div>

        <div class="mb-4">
          <label for="availability" class="block mb-2 font-medium text-gray-700">Availability</label>
          <select id="availability" name="availability" v-model="product.availability"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400">
            <option value="" disabled>Select Availability</option>
            <option>In stock</option>
            <option>Out of stock</option>
          </select>
        </div>

        <div>
          <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            <div class="flex items-center justify-center" v-if="loading">
              <span class="text-center me-2">{{ $t('btn.loading') }}...</span>
              <icon name="svg-spinners:270-ring-with-bg" />
            </div>
            <span v-else>Submit</span>
          </button>
        </div>
      </form>
    </div>

    <!-- complete-operation component -->
    <complete-operation v-if="showToast" :title="t('form.account_created')"
      :message="t('form.your_account_has_been_successfully_created')" @close="showToast = false" />
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/productsStore'

const store = useProductsStore()
const loading = ref(false);
const showToast = ref(false);
const categories = ref([])
const subCategories = ref([])
const selectedCategory = ref('')
const selectedSubCategory = ref('')
const product = ref({ title: '', subtitle: '', price: '', originalPrice: '', discount: '', productCode: '', brand: '', productTypes: [] })

const handleFileChange = async (event) => {
  const files = Array.from(event.target.files);
  if (files.length > 4) {
    alert("You can only upload up to 4 images.");
    return;
  }
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload an image in JPEG, PNG, or WebP format.');
      return;
    }
    const maxSize = 4 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('Image size must not exceed 2MB.');
      return;
    }
    const base64Image = await convertToBase64(file);
    if (i === 0) {
      product.value.imgOne = base64Image;
    } else if (i === 1) {
      product.value.imgTwo = base64Image;
    } else if (i === 2) {
      product.value.imgThree = base64Image;
    } else if (i === 3) {
      product.value.imgFour = base64Image;
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
  loading.value = true;
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
    imgThree: product.value.imgThree || null,
    imgFour: product.value.imgFour || null,
    productTypes: product.value.productTypes,
    availability: product.value.availability,
  };
  if (product.value.imgOne) productData.imgOne = product.value.imgOne;
  if (product.value.imgTwo) productData.imgTwo = product.value.imgTwo;
  if (product.value.imgThree) productData.imgThree = product.value.imgThree;
  if (product.value.imgFour) productData.imgFour = product.value.imgFour;
  try {
    await store.createProduct(productData);
    showToast.value = true;
  } catch (error) {
    console.error("Error adding product:", error);
  } finally {
    loading.value = false;
    selectedCategory.value = '';
    selectedSubCategory.value = '';
    subCategories.value = [];
    product.value = {};
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

const { formatDecimal, enforceTwoDecimalPlaces } = useFormatter();

const handleInput = (event, key) => {
  const inputElement = event.target;
  const cursorPosition = inputElement.selectionStart;
  const formattedValue = formatDecimal(inputElement.value);
  product.value[key] = formattedValue;
  nextTick(() => {
    inputElement.setSelectionRange(cursorPosition, cursorPosition);
  });
};

const handleBlur = (key) => {
  product.value[key] = enforceTwoDecimalPlaces(product.value[key]);
};

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.products'),
})
</script>