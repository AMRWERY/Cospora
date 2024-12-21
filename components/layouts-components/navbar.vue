<template>
  <div>
    <div v-if="isNavVisible">
      <nav class="fixed top-0 start-0 end-0 py-1.5 flex justify-center z-50 whitespace-nowrap nav-img">
        <icon name="ci:close-sm" @click="isNavVisible = false" class="absolute text-white cursor-pointer end-4" />
        <p class="mt-0.5 text-sm text-white nav-title capitalize tracking-wider font-normal">
          Sale up to 70% off on selected items. End in: 00D.00H.00M.00S
        </p>
      </nav>
    </div>

    <ClientOnly>
      <HeadlessDisclosure as="nav" class="mt-10 bg-[#f7f7f7] relative z-10" v-slot="{ open }">
        <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 flex items-center start-0 sm:hidden">
              <!-- Mobile menu button-->
              <HeadlessDisclosureButton @click="toggleSidebar"
                class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md">
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <icon name="heroicons-outline:menu" v-if="!open" class="block w-6 h-6" aria-hidden="true" />
                <icon name="heroicons-outline:x-mark" v-else class="block w-6 h-6" aria-hidden="true" />
              </HeadlessDisclosureButton>
            </div>
            <!-- Left Section - Currency Menu -->
            <div class="flex items-center justify-start flex-1">
              <HeadlessMenu as="div" class="relative hidden ms-3 sm:flex">
                <div class="flex items-center space-s-5">
                  <!-- Currency Menu Button -->
                  <ClientOnly>
                    <HeadlessMenuButton class="relative flex items-center text-sm">
                      <span class="sr-only">Open currency menu</span>
                      <span class="flex items-center space-s-2">
                        <p class="text-xs">USD</p>
                        <icon name="ep:arrow-down" size="15px" />
                      </span>
                    </HeadlessMenuButton>
                  </ClientOnly>

                  <!-- Find A Store Section -->
                  <span class="flex items-center space-s-2">
                    <icon name="ep:location" size="30px" />
                    <p class="text-xs capitalize">Find A Store</p>
                  </span>
                </div>
                <!-- Currency menu items -->
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute z-10 w-32 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg start-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to=""
                        :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                        <span class="flex items-center space-s-2">
                          <icon name="flagpack:us" size="15px" />
                          <p class="text-xs">USD</p>
                        </span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to=""
                        :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                        <span class="flex items-center space-s-2">
                          <icon name="flag:eu-4x3" size="15px" />
                          <p class="text-xs">EUR</p>
                        </span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to=""
                        :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                        <span class="flex items-center space-s-2">
                          <icon name="flag:gb-4x3" size="15px" />
                          <p class="text-xs">GBP</p>
                        </span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to=""
                        :class="[active ? 'bg-gray-100 underline' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">
                        <span class="flex items-center space-s-2">
                          <icon name="flag:ro-4x3" size="15px" />
                          <p class="text-xs">CHF</p>
                        </span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>
            </div>

            <!-- Middle Section - Cospora -->
            <div class="flex justify-center flex-1">
              <nuxt-link to="/" class="text-3xl font-semibold capitalize opacity-100 max-h-7"
                ref="el">Cospora</nuxt-link>
            </div>

            <!-- Right Section - Notifications & Profile -->
            <div class="flex items-center justify-end flex-1 space-s-3">
              <HeadlessMenu as="div" class="relative ms-3" v-if="store.isUserAuthenticated">
                <div>
                  <HeadlessMenuButton class="relative flex text-sm bg-gray-800 rounded-full">
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <img class="rounded-full size-8"
                      src="https://justfields.com/storage/projects/7M5rV059/profile.jpg" />
                  </HeadlessMenuButton>
                </div>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg end-0 ring-1 ring-black/5 focus:outline-none">
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to="/profile"
                        :class="[active ? 'bg-gray-100 outline-none' : '', 'flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer space-x-4']">
                        <icon name="dashicons:admin-users" class="w-5 h-5 text-grey-700" />
                        <span>Your Profile</span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }"
                      v-if="store.isUserAuthenticated && userEmail === 'admin@cospora.com'">
                      <nuxt-link to="/dashboard"
                        :class="[active ? 'bg-gray-100 outline-none' : '', 'flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer space-x-4']">
                        <icon name="heroicons-solid:presentation-chart-line" class="w-5 h-5 text-grey-700" />
                        <span>Dashboard</span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to="/order-summary"
                        :class="[active ? 'bg-gray-100 outline-none' : '', 'flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer space-x-4']">
                        <icon name="material-symbols-light:list-alt" class="w-5 h-5 text-grey-700" />
                        <span>Order Summary</span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                    <HeadlessMenuItem v-slot="{ active }">
                      <nuxt-link to="" @click="logout"
                        :class="[active ? 'bg-gray-100 outline-none' : '', 'flex items-center px-4 py-2 text-sm text-gray-700 cursor-pointer space-x-4']">
                        <icon name="mdi:logout" class="w-5 h-5 text-grey-700" />
                        <span>Sign out</span>
                      </nuxt-link>
                    </HeadlessMenuItem>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>

              <HeadlessMenu as="div" class="relative ms-3" v-if="!store.isUserAuthenticated">
                <ClientOnly>
                  <HeadlessMenuButton class="relative flex items-center hidden text-sm md:flex">
                    <span class="sr-only">Open Sign In menu</span>
                    <span class="flex items-center space-s-1">
                      <p class="text-xs capitalize whitespace-nowrap">Sign In</p>
                      <icon name="ep:arrow-down" size="15px" />
                    </span>
                  </HeadlessMenuButton>
                  <HeadlessMenuButton class="relative flex items-center text-sm md:hidden">
                    <span class="sr-only">Open Sign In menu</span>
                    <span class="flex items-center space-s-1">
                      <icon name="ic:round-person-outline" class="w-6 h-6" />
                    </span>
                  </HeadlessMenuButton>
                </ClientOnly>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg end-0 w-80 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <!-- login-dialog component -->
                    <login-dialog />
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>

              <ClientOnly>
                <nuxt-link to="/wishlist" type="button" class="relative hidden mt-1 text-gray-700 rounded-full sm:flex"
                  v-if="store.isUserAuthenticated">
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">View wishlist</span>
                  <icon name="clarity:heart-line" size="26px" />
                </nuxt-link>
              </ClientOnly>

              <HeadlessMenu as="div" class="relative ms-3" v-if="store.isUserAuthenticated">
                <ClientOnly>
                  <HeadlessMenuButton class="relative flex items-center text-sm">
                    <span class="sr-only">Open Sign In menu</span>
                    <span class="flex items-center space-s-1">
                      <div class="relative">
                        <span
                          class="absolute top-0 inline-flex items-center justify-center w-5 h-5 -mt-2 text-xs text-white bg-black rounded-full -me-3 end-2">
                          {{ cartStore.cart.length }}
                        </span>
                        <button type="button" class="relative mt-1 text-gray-700 rounded-full">
                          <span class="absolute -inset-1.5" />
                          <span class="sr-only">View cart</span>
                          <icon name="clarity:shopping-cart-line" size="26px" />
                        </button>
                      </div>
                    </span>
                  </HeadlessMenuButton>
                </ClientOnly>
                <transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <HeadlessMenuItems
                    class="absolute w-[500px] z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg -end-6 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <HeadlessMenuItem>
                      <cart-dialog />
                    </HeadlessMenuItem>
                  </HeadlessMenuItems>
                </transition>
              </HeadlessMenu>

              <!-- Toggle Language -->
              <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-if="isRTL"
                @click="updateLocale('en'); changeLocale('en')">
                <span class="[&>svg]:w-5">
                  En
                </span>
              </nuxt-link>
              <nuxt-link class="me-4 text-neutral-600 dark:text-white" to="" role="button" v-else
                @click="updateLocale('ar'); changeLocale('ar')">
                <span class="[&>svg]:w-5">
                  العربية
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </HeadlessDisclosure>
    </ClientOnly>

    <nav class="hidden max-w-5xl px-2 py-4 mx-auto sm:px-6 lg:px-8 space-s-10 md:flex sm:hidden">
      <!-- new-in-menu component -->
      <new-in-menu />

      <!-- mega-menu (Makeup) -->
      <mega-menu title="Makeup" :categories="makeupCategories" />

      <!-- mega-menu (Nail) -->
      <mega-menu title="Nail" :categories="nailCategories" />

      <!-- mega-menu (Accessories) -->
      <mega-menu title="Accessories" :categories="accessoriesCategories" />

      <!-- mega-menu (Makeup Tools) -->
      <mega-menu title="Makeup Tools" :categories="makeupToolsCategories" />

      <div class="relative">
        <span
          class="absolute top-0 inline-flex items-center justify-center ms-8 -mt-5 text-xs text-white rounded-lg bg-[#ec4065] ring-1 ring-inset ring-red-600/10 px-1.5 py-0.5">
          Sale
        </span>
        <span class="absolute -inset-1.5" />
        <nuxt-link to="" class="relative text-base font-bold cursor-pointer hover:underline hover:underline-offset-2">
          Fragrance
        </nuxt-link>
      </div>
      <div class="relative">
        <span
          class="absolute top-0 inline-flex items-center justify-center ms-9 -mt-5 text-xs text-white rounded-lg bg-[#f79a00] ring-1 ring-inset ring-red-600/10 px-1.5 py-0.5">
          Hot
        </span>
        <span class="absolute -inset-1.5" />
        <nuxt-link to="" class="relative text-base font-bold cursor-pointer hover:underline hover:underline-offset-2">
          LookBook
        </nuxt-link>
      </div>
      <div class="relative">
        <span
          class="absolute top-0 inline-flex items-center justify-center ms-4 -mt-5 text-xs text-white rounded-lg bg-[#43b5f4] ring-1 ring-inset ring-red-600/10 px-1.5 py-0.5">
          New
        </span>
        <span class="absolute -inset-1.5" />
        <nuxt-link to="/brands"
          class="relative text-base font-bold cursor-pointer hover:underline hover:underline-offset-2">
          Brands
        </nuxt-link>
      </div>
      <nuxt-link to="" class="text-base font-bold cursor-pointer hover:underline hover:underline-offset-2">Buy
        Theme</nuxt-link>
    </nav>

    <transition name="sidebar-transition" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isSidebarVisible" class="fixed inset-0 z-40 bg-gray-800 mt-7 bg-opacity-40 sm:hidden">
        <div class="relative w-64 h-full p-5 overflow-y-auto bg-white scrollbar-hidden">
          <icon name="ci:close-sm" @click="toggleSidebar" class="absolute cursor-pointer top-4 end-4" />
          <nav class="space-y-4">
            <!-- nested-menu component-->
            <nested-menu />

            <nuxt-link to="" class="block px-4 text-sm">Fragrance</nuxt-link>
            <nuxt-link to="" class="block px-4 text-sm">LookBook</nuxt-link>
            <nuxt-link to="" class="block px-4 text-sm">Brands</nuxt-link>
            <nuxt-link to="" class="block px-4 text-sm">Buy Theme</nuxt-link>
          </nav>
        </div>
      </div>
    </transition>

    <!-- overlay component -->
    <overlay :visible="showOverlay" />
  </div>
</template>

<script setup>
import { changeLocale } from '@formkit/vue'
import { useCartStore } from '@/stores/cartStore';

const cartStore = useCartStore();

const isNavVisible = ref(true)

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

const isSidebarVisible = ref(false)

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}

const beforeEnter = (el) => {
  el.style.transform = 'translateX(-100%)'
  el.offsetHeight
}

const enter = (el, done) => {
  el.offsetHeight
  el.style.transition = 'transform 0.3s ease, opacity 0.3s ease'
  el.style.transform = 'translateX(0)'
  el.style.opacity = 1
  done()
}

const leave = (el, done) => {
  el.style.transition = 'transform 0.3s ease, opacity 0.3s ease'
  el.style.transform = 'translateX(-100%)'
  el.style.opacity = 0
  done()
}

//rotate logo composable
const { el } = useAnimateRotation();

const { locale, setLocale } = useI18n();
const isRTL = ref(false);

const updateLocale = (value) => {
  setLocale(value);
  changeLocale(value);
  sessionStorage.setItem('locale', value);
  isRTL.value = value === 'ar';
  setTimeout(() => {
    location.reload();
  }, 1000);
};

onMounted(() => {
  const storedLocale = sessionStorage.getItem('locale') || 'en';
  setLocale(storedLocale);
  changeLocale(storedLocale);
  isRTL.value = storedLocale === 'ar';
});

watch(locale, (newVal) => {
  isRTL.value = newVal === 'ar';
});

// const { locale, setLocale } = useI18n();

// const updateLocale = (value) => {
//   setLocale(value);
//   sessionStorage.setItem("locale", value);
//   setTimeout(() => {
//     location.reload();
//   }, 1000);
// };

// const isRTL = ref(false);

// watch(locale, (newVal) => {
//   isRTL.value = newVal === 'ar';
// });

// onMounted(() => {
//   const storedLocale = sessionStorage.getItem("locale");
//   if (storedLocale) {
//     setLocale(storedLocale);
//   }
// });

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
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
};

const userEmail = computed(() => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem('email');
  } else {
    return null;
  }
});

const makeupCategories = [
  {
    title: "Lorem Dorus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Molateas', route: '' },
      { title: 'Destibulum Mauris', route: '' },
    ],
  },
  {
    title: "Milancelos",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Cosmopolis",
    links: [
      { title: 'Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Molateas', route: '' },
    ],
  },
  {
    title: "Nor Loremirus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
    ],
  },
  {
    title: "Dapibor",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
    ],
  },
]

const nailCategories = [
  {
    title: "Lorem Dorus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Milancelos",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Milancelos', route: '' },
    ],
  },
  {
    title: "Cosmopolis",
    links: [
      { title: 'Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Molateas', route: '' },
    ],
  },
  {
    title: "Comos Milano",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
    ],
  },
  {
    title: "Nor Loremirus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Dapibor",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
    ],
  },
]

const accessoriesCategories = [
  {
    title: "Lorem Dorus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Milancelos",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Milancelos', route: '' },
    ],
  },
  {
    title: "Cosmopolis",
    links: [
      { title: 'Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Molateas', route: '' },
    ],
  },
  {
    title: "Comos Milano",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
    ],
  },
  {
    title: "Nor Loremirus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Dapibor",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
    ],
  },
]

const makeupToolsCategories = [
  {
    title: "Lorem Dorus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Milancelos",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Milancelos', route: '' },
    ],
  },
  {
    title: "Cosmopolis",
    links: [
      { title: 'Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Molateas', route: '' },
    ],
  },
  {
    title: "Comos Milano",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Malesuada', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
    ],
  },
  {
    title: "Nor Loremirus",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Milancelos', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
      { title: 'Cosmopolis', route: '' },
    ],
  },
  {
    title: "Dapibor",
    links: [
      { title: 'Maecenas Commodos', route: '' },
      { title: 'Fermentum Loremous', route: '' },
      { title: 'Habitasse Molateas', route: '' },
      { title: 'Malesuada Sarcus', route: '' },
    ],
  },
]
</script>

<style scoped>
.sidebar-transition-enter-active,
.sidebar-transition-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar-transition-enter,
.sidebar-transition-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-transition-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>