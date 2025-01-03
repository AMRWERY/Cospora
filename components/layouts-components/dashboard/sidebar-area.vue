<template>
    <div>
        <aside v-if="!isAuthPage"
            class="absolute start-0 top-0 z-50 flex h-screen w-[230px] flex-col overflow-y-hidden bg-black duration-300 ease-linear lg:static lg:translate-x-0"
            :class="{
                'translate-x-0': !sidebarStore.isSidebarOpen && !isRTL,
                'translate-x-full': sidebarStore.isSidebarOpen && isRTL,
                'translate-x-0': sidebarStore.isSidebarOpen && isRTL,
                '-translate-x-full': !sidebarStore.isSidebarOpen && !isRTL
            }" ref="target">
            <!-- SIDEBAR HEADER -->
            <div class="flex items-center justify-between gap-3 px-6 py-[1.375rem] lg:py-6.5">
                <nuxt-link to="/dashboard" ref="el">
                    <p class="text-3xl font-semibold text-white capitalize opacity-100 max-h-7">Cospora</p>
                </nuxt-link>

                <button class="block lg:hidden" @click="sidebarStore.isSidebarOpen = false">
                    <icon name="ic:baseline-arrow-back-ios-new" class="w-5 h-5 mt-2 text-white fill-current" />
                </button>
            </div>
            <!-- SIDEBAR HEADER -->

            <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <!-- Sidebar Menu -->
                <nav class="px-4 py-4 mt-5 text-white lg:mt-9 lg:px-6">
                    <template v-for="menuGroup in menuGroups" :key="menuGroup.name">
                        <div>
                            <ul class="mb-6 flex flex-col gap-1.5">
                                <sidebar-item v-for="(menuItem, index) in menuGroup.menuItems" :item="menuItem"
                                    :key="index" :index="index" />
                            </ul>
                        </div>
                    </template>
                </nav>
                <!-- Sidebar Menu -->
            </div>
            <div class="px-6 pb-6 mt-auto">
                <nuxt-link type="button" to="/admin-login" @click="logout"
                    class="block py-2 text-center text-white transition-all duration-300 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black">
                    {{ $t('btn.logout') }}
                </nuxt-link>
            </div>
        </aside>

        <!-- overlay component -->
        <overlay :visible="showOverlay" />
    </div>
</template>

<script setup>
const target = ref(null)

const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
    sidebarStore.isSidebarOpen = false
})

//rotate logo composable
const { el } = useAnimateRotation();

const isRTL = computed(() => document.documentElement.dir === 'rtl');

const store = useAuthStore()
const showOverlay = ref(false);

const logout = async () => {
    try {
        showOverlay.value = true;
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await store.logout();
        sessionStorage.removeItem("isAuthenticated");
    } catch (error) {
        console.error("Logout error:", error);
    } finally {
        showOverlay.value = false;
    }
};

//hide routes composable
const { isAuthPage } = useAuthPage();

const { t } = useI18n()

const menuGroups = computed(() => [
    {
        menuItems: [
            {
                icon: 'material-symbols:dashboard-outline-rounded',
                label: t('layout.dashboard'),
                route: '/dashboard',
            },
            {
                icon: 'ion:tshirt',
                label: t('layout.products'),
                route: '/products',
            },
            {
                icon: 'material-symbols:calendar-month-sharp',
                label: t('layout.add_categories'),
                route: '/add-categories',
            },
            {
                icon: 'gravity-ui:persons',
                label: t('layout.users'),
                route: '/users',
            },
            {
                icon: 'mdi:order-bool-descending-variant',
                label: t('layout.orders'),
                route: '/orders',
            },
        ],
    },
]);
</script>