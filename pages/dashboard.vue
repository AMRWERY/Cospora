<!-- <template>
  <div>
    <div class="max-w-2xl px-8 py-6 mx-auto my-8 bg-white border rounded-lg">
      <h2 class="mb-4 text-2xl font-medium text-center">Add product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="main-category" class="block mb-2 font-medium text-gray-700">Main Category</label>
          <select id="main-category" name="main-category" v-model="store.selectedMainCategory"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
            <option value="">Select Main Category</option>
            <option v-for="category in store.mainCategories" :key="category" :value="category">{{ category }}</option>
          </select>
        </div>

        <div class="mb-4" v-if="store.selectedMainCategory === 'newProducts'">
          <label for="sub-category" class="block mb-2 font-medium text-gray-700">Sub Category</label>
          <select id="sub-category" name="sub-category" v-model="store.selectedSubCategory"
            class="w-full p-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400" required>
            <option value="">Select Sub Category</option>
            <option v-for="(products, subCategory) in store.subCategories" :key="subCategory" :value="subCategory">
              {{ subCategory }}
            </option>
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
                  <input type="file" class="w-full h-full opacity-0" name="" @change="subtitle">
                </div>
              </div>
            </div>
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
                <input type="radio" id="new" name="new" value="" class="mr-2">New
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="sale" class="block mb-2 font-medium text-gray-700">
                <input type="radio" id="sale" name="sale" value="" class="mr-2" v-model="product.sale">Sale
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="bundle" class="block mb-2 font-medium text-gray-700">
                <input type="radio" id="bundle" name="bundle" value="" class="mr-2">Bundle
              </label>
            </div>
            <div class="w-1/4 px-2">
              <label for="custom-label" class="block mb-2 font-medium text-gray-700">
                <input type="radio" id="custom-label" name="custom-label" value="" class="mr-2">Custom Label
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
import { useAddProductStore } from '@/stores/addProductStore'

const store = useAddProductStore();

onMounted(() => {
  store.fetchCategories();
});

const product = ref({
  title: '',
  subtitle: '',
  price: 0,
  discount: 0,
  // sale: false,
  // new: false,
  // imgOne: '',
  // imgTwo: '',
});

const handleSubmit = async () => {
  const selectedCategory = store.mainCategories.find(
    (category) => category.id === store.selectedMainCategory
  );

  if (!selectedCategory) {
    alert('Please select a main category.');
    return;
  }

  if (!store.selectedSubCategory) {
    alert('Please select a subcategory.');
    return;
  }

  // Constructing the product object
  const product = {
    title: product.value.title,
    subtitle: product.value.subtitle,
    price: product.value.price,
    discount: product.value.discount,
    categoryId: store.selectedMainCategory,
    subCategoryId: store.selectedSubCategory
  };

  // Add the product
  const result = await store.addProduct(product);

  if (result.success) {
    alert('Product added successfully!');
  } else {
    alert(`Failed to add product: ${result.message}`);
  }
};

// const handleSubmit = async () => {
//   console.log("Product:", product.value);
//   console.log("Selected Subcategory:", store.selectedSubCategory);

//   if (!store.selectedMainCategory) {
//     alert('Please select a main category.');
//     return;
//   }
//   if (store.selectedMainCategory === 'newProducts' && !store.selectedSubCategory) {
//     alert('Please select a sub-category.');
//     return;
//   }

//   const result = await store.addProduct(product.value, store.selectedSubCategory);

//   if (result.success) {
//     alert('Product added successfully!');
//     product.value = {
//       title: '',
//       subtitle: '',
//       price: 0,
//       discount: 0,
//       sale: false,
//     };
//     store.selectedMainCategory = '';
//     store.selectedSubCategory = '';
//   } else {
//     alert(`Failed to add product: ${result.message}`);
//   }
// };

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.dashboard'),
})
</script> -->


<template>
  <div class="max-w-2xl p-6 mx-auto bg-white border rounded-lg">
    <p>dashboard home page</p>
  </div>
</template>

<script setup>
const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: t('head.dashboard'),
})
</script>