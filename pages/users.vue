<template>
  <div>
    <breadcrumb />

    <h3 class="py-2 mt-5 mb-12 text-2xl font-bold text-start">{{ $t('dashboard.users') }}</h3>
    <div
      class="relative flex flex-col w-full h-full overflow-scroll overflow-y-hidden text-gray-700 bg-white rounded-lg shadow-md bg-clip-border">
      <table class="w-full text-start table-auto min-w-max">
        <thead>
          <tr>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                #
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                {{ $t('dashboard.email') }}
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                {{ $t('dashboard.first_name') }}
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                {{ $t('dashboard.last_name') }}
              </p>
            </th>
            <th class="p-4 border-b border-slate-200 bg-slate-50">
              <p class="text-sm font-normal leading-none text-slate-500">
                {{ $t('dashboard.status') }}
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
              <p class="text-sm font-semibold" :class="user.isBlocked ? 'text-red-500' : 'text-green-500'">
                {{ user.isBlocked ? $t('dashboard.blocked') : $t('dashboard.active') }}
              </p>
            </td>
            <td class="p-4 py-5">
              <div class="flex space-s-2">
                <button @click="removeUser(user.id)" data-twe-toggle="tooltip" data-twe-placement="top"
                  :title="$t('tooltip.delete_user')"
                  class="flex items-center justify-center w-8 h-8 text-red-500 rounded hover:text-red-600">
                  <icon v-if="removingUser === user.id" name="svg-spinners:6-dots-rotate" size="20px"
                    class="text-red-500" />
                  <icon name="grommet-icons:form-trash" class="w-6 h-6" v-else />
                </button>

                <button @click="userStore.toggleBlockUser(user.id)"
                  :title="user.isBlocked ? $t('tooltip.unblock_user') : $t('tooltip.block_user')"
                  class="flex items-center justify-center w-8 h-8 rounded"
                  :class="user.isBlocked ? 'text-green-500 hover:text-green-600' : 'text-yellow-500 hover:text-yellow-600'">
                  <icon :name="user.isBlocked ? 'heroicons-solid:check-circle' : 'heroicons-solid:ban'"
                    class="w-6 h-6" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex items-center px-4 py-3">
        <div class="flex mt-3 space-x-1 ms-auto">
          <button @click="userStore.changePage(userStore.currentPage - 1)" :disabled="userStore.currentPage === 1"
            class="px-3 py-1 text-sm font-normal transition duration-200 bg-white border rounded min-w-9 min-h-9 text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-400 ease">
            {{ $t('pagination.previous') }}
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
            {{ $t('pagination.next') }}
          </button>
        </div>
      </div>
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
import { useUserStore } from "@/stores/usersStore";

const userStore = useUserStore();

const showToast = ref(false);
const toastTitle = ref('');
const toastMessage = ref('');
const toastType = ref('');
const toastIcon = ref('')

const removingUser = ref(null);

const { t } = useI18n()

const removeUser = async (userId) => {
  if (!userId) {
    // console.error("No userId provided for removal.");
    return;
  }
  try {
    removingUser.value = userId;
    await userStore.deleteUser(userId);
    setTimeout(() => {
      removingUser.value = null;
    }, 3000);
    showToast.value = true;
    toastTitle.value = t('toast.great');
    toastMessage.value = t('toast.user_deleted_successfully');
    toastType.value = 'success';
    toastIcon.value = 'mdi:check-circle'
  } catch (error) {
    console.error("Error removing user:", error);
  }
};

onMounted(async () => {
  await userStore.fetchUsers();
  const { Tooltip, initTWE } = await import("tw-elements");
  initTWE({ Tooltip });
});

definePageMeta({
  layout: 'dashboard'
})

useHead({
  titleTemplate: () => t("head.users"),
});
</script>