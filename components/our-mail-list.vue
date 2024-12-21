<template>
  <div>
    <HeadlessTransitionRoot appear :show="isOpen" as="template">
      <HeadlessDialog as="div" @close="closeModal" class="relative z-10">
        <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
          enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </HeadlessTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex items-center justify-center min-h-full p-4 text-center">
            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <HeadlessDialogPanel
                class="w-full max-w-xl p-3 overflow-y-auto text-start align-middle transition-all transform bg-white shadow-xl rounded-2xl scrollbar-hidden max-h-[80vh]">

                <!-- Image Container with Close Button -->
                <div class="relative">
                  <img src="https://justfields.com/storage/projects/7M5rV059/newsletter.jpg"
                    class="object-cover w-full mb-4 rounded-lg h-96" />
                  <button @click="closeModal" class="absolute text-black rounded-full top-2 end-2">
                    <icon name="proicons:cancelall" class="w-8 h-8" />
                  </button>
                </div>

                <div class="max-w-sm mx-auto mt-8 text-center">
                  <p class="text-2xl font-semibold text-gray-800">
                    {{ $t('mail.join_our_mailing_list') }}
                  </p>
                  <div class="w-12 h-0.5 mx-auto my-2 bg-red-500"></div>
                  <p class="mt-5 text-xs font-semibold">{{
                    $t('mail.get_the_latest_updates_on_new_products_and_upcoming_sales') }}</p>
                  <span class="text-xs text-gray-800">{{ $t('mail.we_promise_to_only_send_you_good_things') }}</span>
                </div>
                <div class="w-full max-w-sm min-w-[200px] mx-auto mt-4">
                  <div class="relative">
                    <input type="email"
                      class="w-full py-3 text-sm transition duration-300 bg-transparent border rounded-md shadow-sm ps-3 pe-16 placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow"
                      placeholder="Your Email Address" />
                    <button
                      class="absolute end-1 top-1 rounded bg-black py-2 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="submit">
                      {{ $t('btn.submit') }}
                    </button>
                  </div>
                </div>

                <div class="flex mx-0 my-6 space-s-5 sm:justify-center">
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="mdi:facebook-box" size="25px" class="hover:bg-blue-700" />
                  </button>
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="mdi:twitter" size="25px" class="hover:bg-blue-500" />
                  </button>
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="bx:bxl-pinterest-alt" size="25px" class="hover:bg-red-800" />
                  </button>
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="jam:google-plus" size="25px" class="hover:bg-red-700" />
                  </button>
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="mdi:instagram" size="25px" class="hover:bg-purple-700" />
                  </button>
                  <button class="flex items-center justify-center w-7 h-7">
                    <icon name="mingcute:snapchat-fill" size="25px" class="hover:bg-yellow-400" />
                  </button>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </HeadlessTransitionRoot>
  </div>
</template>

<script setup>
const isOpen = ref(false);

onMounted(() => {
  const dialogShown = JSON.parse(localStorage.getItem("dialogShown")) === true;
  if (!dialogShown) {
    isOpen.value = true;
    localStorage.setItem("dialogShown", true);
  }
});

const closeModal = () => {
  isOpen.value = false;
  localStorage.setItem("dialogShown", "true");
};
</script>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>