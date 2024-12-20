<template>
  <div>
    <div class="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <!-- Order Number -->
      <div class="mb-6">
        <h2 class="mb-2 text-2xl font-semibold text-gray-900">Order Summary</h2>
        <p class="text-sm text-gray-500">Order Number: <span class="font-medium text-gray-900">{{ orderId }}</span>
        </p>
      </div>

      <!-- Product Details -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b" v-for="item in cartStore.cart" :key="item.productId">
        <div class="col-span-2">
          <img :src="item.imgOne" class="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div class="col-span-10">
          <p class="text-lg font-semibold text-gray-900">{{ item.title }}</p>
          <p class="text-sm font-semibold text-gray-700"><span>Category: </span>{{ item.categoryTitle }}</p>
        </div>
      </div>

      <!-- Subtotal Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Subtotal</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-gray-900">${{ subTotalAmount }}</dd>
        </div>
      </div>

      <!-- Savings Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Savings</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-green-500">%{{ averageDiscount }}</dd>
        </div>
      </div>

      <!-- Store Pickup Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Store Pickup</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-gray-900">$25.00</dd>
        </div>
      </div>

      <!-- Tax Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Tax</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-gray-900">$18.00</dd>
        </div>
      </div>

      <!-- Total Section -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-8 font-semibold text-gray-900">
          <dt class="text-xl">Total</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-xl font-semibold text-gray-900">${{ totalAmount }}</dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCheckoutStore } from '@/stores/checkoutStore';
import { useCartStore } from '@/stores/cartStore';

const checkoutStore = useCheckoutStore();

const orderId = checkoutStore.generateOrderId();

const cartStore = useCartStore();

const subTotalAmount = computed(() => {
  return cartStore.cart.reduce((total, item) => {
    return total + (parseFloat(item.price) * item.quantity);
  }, 0).toFixed(2);
});

const totalDiscount = computed(() => {
  return cartStore.cart.reduce((total, item) => {
    return total + (parseFloat(item.discount) * item.quantity);
  }, 0);
});

const averageDiscount = computed(() => {
  const totalItems = cartStore.cart.reduce((total, item) => total + item.quantity, 0);
  return totalItems > 0 ? (totalDiscount.value / totalItems).toFixed(2) : 0;
});

const totalAmount = computed(() => {
  const subtotal = parseFloat(subTotalAmount.value);
  const savingsAmount = (subtotal * (parseFloat(averageDiscount.value) / 100));
  const storePickup = 25;
  const tax = 18;
  const total = subtotal - savingsAmount + storePickup + tax;
  return total.toFixed(2);
});

onMounted(async () => {
  await cartStore.fetchCart();
});
</script>