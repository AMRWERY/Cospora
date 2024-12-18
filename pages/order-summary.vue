<template>
  <div>
    <div class="max-w-4xl p-6 mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <!-- Order Number -->
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900">Order Summary</h2>
        <p class="text-sm text-gray-500">Order Number: <span class="font-medium text-gray-900">ORD123456</span>
        </p>
      </div>

      <!-- Product Details -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-2">
          <img src="https://via.placeholder.com/150" class="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div class="col-span-10">
          <p class="text-lg font-semibold text-gray-900">Sample Product Title</p>
          <p class="text-sm text-gray-500">Subcategory: Sample Subcategory"</p>
        </div>
      </div>

      <!-- Subtotal Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Subtotal</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-gray-900">$180.00</dd>
        </div>
      </div>

      <!-- Savings Section -->
      <div class="grid grid-cols-12 gap-6 pb-6 mb-6 border-b">
        <div class="col-span-8">
          <dt class="text-sm font-medium text-gray-500">Savings</dt>
        </div>
        <div class="col-span-4 text-right">
          <dd class="text-sm font-medium text-green-500">%15</dd>
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
          <dd class="text-xl font-semibold text-gray-900">$225.00</dd>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>