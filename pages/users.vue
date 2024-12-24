<template>
  <div>
    <h3 class="py-2 mb-12 text-2xl font-bold text-start">Users</h3>
    <div class="flex items-center justify-between w-full pl-3 mt-1 mb-3">
      <div class="ms-auto">
        <div class="w-full max-w-sm min-w-[200px] relative">
          <div class="relative">
            <input
              class="w-full h-10 py-2 pl-3 text-sm transition duration-200 bg-transparent bg-white border rounded shadow-sm pr-11 placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 focus:shadow-md"
              placeholder="Search for user..." />
            <button class="absolute flex items-center w-8 h-8 px-2 my-auto bg-white rounded right-1 top-1 "
              type="button">
              <icon name="heroicons-solid:magnifying-glass" class="w-8 h-8 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white rounded-lg shadow-md bg-clip-border">
      <table class="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                #
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                Email
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                First Name
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                Last Name
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b hover:bg-slate-50 border-slate-200" v-for="(user, index) in userStore.paginatedUsers"
            :key="user.id">
            <td class="p-4 py-5">
              <p class="block text-sm text-slate-500">{{ (userStore.currentPage - 1) * userStore.usersPerPage + index +
                1 }}</p>
            </td>
            <td class="p-4 py-5">
              <p class="block text-sm text-slate-500">{{ user.email }}</p>
            </td>
            <td class="p-4 py-5">
              <p class="text-sm text-slate-500">{{ user.firstName }}</p>
            </td>
            <td class="p-4 py-5">
              <p class="text-sm text-slate-500">{{ user.lastName }}</p>
            </td>
            <td class="p-4 py-5">
              <p class="font-medium text-blue-600 dark:text-blue-500 hover:underline">actions</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex items-center px-4 py-3">
        <div class="flex mt-3 space-x-1 ms-auto">
          <button @click="userStore.changePage(userStore.currentPage - 1)" :disabled="userStore.currentPage === 1"
            class="px-3 py-1 text-sm font-normal transition duration-200 bg-white border rounded min-w-9 min-h-9 text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-400 ease">
            Prev
          </button>
          <button v-for="page in userStore.totalPages" :key="page" @click="userStore.changePage(page)" :class="{
            'bg-slate-800 text-white': page === userStore.currentPage,
            'bg-white text-slate-500': page !== userStore.currentPage,
          }"
            class="px-3 py-1 text-sm font-normal transition duration-200 border rounded min-w-9 min-h-9 border-slate-200 hover:bg-slate-50 hover:border-slate-400 ease">
            {{ page }}
          </button>
          <button @click="userStore.changePage(userStore.currentPage + 1)"
            :disabled="userStore.currentPage === userStore.totalPages"
            class="px-3 py-1 text-sm font-normal transition duration-200 bg-white border rounded min-w-9 min-h-9 text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-400 ease">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/usersStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});

const { t } = useI18n()

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.users"),
});
</script>