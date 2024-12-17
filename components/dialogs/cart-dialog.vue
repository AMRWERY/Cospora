<template>
  <div>
    <div v-if="isCartOpen">
      <div class="p-4 space-y-4" v-if="cartStore.cart.length === 0">
        <p class="text-[13px] text-center text-gray-800">Your cart is currently empty.</p>
        <button type="button"
          class="block w-full px-5 py-2 text-sm font-medium text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
          Continue Shopping
        </button>
      </div>

      <!-- Loading Spinner -->
      <div v-if="cartStore.isLoading"
        class="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
        <icon name="svg-spinners:6-dots-rotate" class="bg-blue-800 spinner" />
      </div>

      <div v-if="cartStore.cart.length > 0">
        <div class="max-w-2xl mx-auto">
          <div class="px-4 py-6 sm:py-10">
            <div class="flow-root">
              <ul class="-my-8">
                <li class="flex flex-col py-6 space-y-3 text-start sm:flex-row sm:space-s-5 sm:space-y-0"
                  v-for="item in cartStore.cart" :key="item.id">
                  <div class="relative shrink-0">
                    <span
                      class="absolute flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-white border rounded-full shadow top-1 start-1 sm:-top-2 sm:-end-2">1</span>
                    <img class="object-cover w-24 h-24 max-w-full rounded-lg" :src="item.imgOne" />
                  </div>
                  <div class="relative flex flex-col justify-between flex-1">
                    <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div class="pe-8 sm:pe-5">
                        <p class="text-base font-semibold text-gray-900 w-72">
                          {{ item.title }}
                        </p>
                        <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                          {{ item.categoryTitle }}
                        </p>
                        <div class="flex items-center space-s-1">
                          <span class="text-sm font-medium text-gray-600 shrink-0">{{ item.quantity }}</span>
                          <span class="text-sm font-medium text-gray-600 shrink-0">x</span>
                          <p class="text-base font-semibold text-gray-900 shrink-0 sm:order-2">
                            ${{ item.price }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between mt-5">
                      <div class="flex items-center">
                        <button type="button" @click.stop="decrementQuantity(item)"
                          class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <icon name="system-uicons:minus" />
                        </button>
                        <input type="number" v-model="quantity" @change="updateQuantityInStore(item.id, item.quantity)"
                          class="text-sm font-medium text-center text-gray-900 bg-transparent border-0 w-14 shrink-0 focus:outline-none focus:ring-0 dark:text-white"
                          placeholder="1" />
                        <button type="button" @click.stop="incrementQuantity(item)"
                          class="inline-flex items-center justify-center w-5 h-5 bg-gray-100 border border-gray-300 rounded-md shrink-0 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                          <icon name="system-uicons:plus" />
                        </button>
                      </div>
                      <div class="flex items-end justify-end">
                        <button type="button" @click.stop="removeItem(item.docId)"
                          class="flex text-center text-gray-500 transition-all duration-200 ease-in-out rounded focus:shadow hover:text-gray-900">
                          <icon v-if="removingItem === item.docId" name="svg-spinners:6-dots-rotate" size="20px"
                            class="text-red-500" />
                          <icon name="grommet-icons:form-trash" class="w-6 h-6" v-else />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="py-8 mt-6 space-y-3 border-t border-b">
              <div class="flex items-center justify-between">
                <p class="font-semibold text-gray-800">Total</p>
                <p class="text-lg font-semibold text-gray-900">${{ totalAmount }}</p>
              </div>
            </div>

            <div class="space-y-3">
              <nuxt-link to="/checkout" type="button" @click="closeCart"
                class="flex items-center justify-center w-full px-5 py-2 text-sm font-medium text-white transition duration-300 border rounded-md bg-rose-500">
                Checkout Now
                <icon name="material-symbols-light:arrow-circle-right" class="w-5 h-5 transition-all ms-2" />
              </nuxt-link>
              <nuxt-link to="/shopping-cart" type="button" @click="closeCart"
                class="block w-full px-5 py-2 text-sm font-medium text-center text-black transition duration-300 bg-white border border-black rounded-md hover:bg-black hover:text-white">
                View Cart
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore';

const isCartOpen = ref(true);

const closeCart = () => {
  isCartOpen.value = false;
};

const cartStore = useCartStore();
const removingItem = ref(null);

const removeItem = async (docId) => {
  if (!docId) {
    console.error("No docId provided for removal.");
    return;
  }
  try {
    removingItem.value = docId;
    await cartStore.removeFromCart(docId);
    setTimeout(() => {
      removingItem.value = null;
    }, 3000);
  } catch (error) {
    console.error("Error removing item:", error);
  }
};

onMounted(async () => {
  await cartStore.fetchCart();
});

const totalAmount = computed(() => {
  return cartStore.cart.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0).toFixed(2);
});

const quantity = ref(1);

const incrementQuantity = (item) => {
  item.quantity++;
  updateQuantityInStore(item.productId, item.quantity);
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    updateQuantityInStore(item.productId, item.quantity);
  }
};

const updateQuantityInStore = async (productId, newQuantity) => {
  if (productId) {
    await cartStore.updateQuantityInCart(productId, newQuantity);
  }
};
</script>